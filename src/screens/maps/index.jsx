import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { COLORS } from '../../themes';
import { Maps } from '../../components';

const MapsScreen = ({ navigation, route }) => {
    const { location } = route.params;

    console.warn({ location });

    const onPickedLocation = (coordinate) => {
        console.warn({ coordinate });
    };

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => null}>
                <Ionicons name="ios-save-outline" size={24} color={COLORS.white} />
            </TouchableOpacity>
        ),
    });

    return (
        <View style={styles.container}>
            <Maps location={location} onPickedLocation={onPickedLocation} />
        </View>
    );
};

export default MapsScreen;
