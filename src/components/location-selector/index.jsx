import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { URL_MAPS } from '../../constants/maps';
import { saveMapImageUrl } from '../../store/address/address.slice';
import { COLORS } from '../../themes';
import MapPreview from '../map-preview';

const LocationSelector = ({ onLocation }) => {
    const dispatch = useDispatch();
    const [pickedLocation, setPickedLocation] = useState(null);
    const verifyPermissions = async () => {
        const { status } = await requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                '¡Permisos insuficientes!',
                'Necesitas conceder permisos de ubicación para usar esta aplicación.',
                [{ text: 'Okay' }]
            );

            return false;
        }
        return true;
    };

    const mapPreviewUrlImage = pickedLocation
        ? URL_MAPS({ lat: pickedLocation.lat, lng: pickedLocation.lng, zoom: 15 })
        : '';

    const onHandlerGetLocation = async () => {
        try {
            const isLocationPermission = await verifyPermissions();
            if (!isLocationPermission) return;

            const location = await getCurrentPositionAsync({
                accuracy: 6,
                timeInterval: 5000,
            });

            if (location) {
                const { latitude, longitude } = location.coords;

                setPickedLocation({ lat: latitude, lng: longitude });
                onLocation({ lat: latitude, lng: longitude });
            }
        } catch (error) {
            console.error('Error in onHandlerGetLocation:', error);
        }
    };

    useEffect(() => {
        if (pickedLocation) {
            dispatch(saveMapImageUrl(mapPreviewUrlImage));
        }
    }, [pickedLocation]);

    return (
        <View style={styles.container}>
            <MapPreview
                location={pickedLocation}
                style={styles.preview}
                mapImage={mapPreviewUrlImage}>
                <Text style={styles.text}>¡Aún no se ha elegido ninguna ubicación!</Text>
            </MapPreview>
            <Button
                title="Obtener ubicación"
                onPress={onHandlerGetLocation}
                color={COLORS.primary}
            />
        </View>
    );
};

export default LocationSelector;
