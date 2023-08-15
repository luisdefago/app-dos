import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Address, CreateAddress, Profile, Settings } from '../screens';
import { COLORS } from '../themes';
import { Maps } from '../components';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: COLORS.primary,
                    height: 80,
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Inter-Bold',
                    fontSize: 16,
                },
                headerTintColor: COLORS.black,
                animation: 'fade_from_bottom',
                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                ),
            })}>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTitle: 'Configuracion',
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: 'Perfil',
                }}
            />
            <Stack.Screen
                name="CreateAddress"
                component={CreateAddress}
                options={{
                    headerTitle: 'Agregar ubicacion',
                }}
            />
            <Stack.Screen
                name="Address"
                component={Address}
                options={{
                    headerTitle: 'Ubicacion',
                }}
            />
            <Stack.Screen
                name="Maps"
                component={Maps}
                options={{
                    headerTitle: 'Mapa',
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackText: {
        fontSize: 14,
        color: COLORS.text,
    },
});

export default SettingsNavigator;
