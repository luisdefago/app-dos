import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Categories, Product } from '../screens';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../themes';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerBackTitleStyle: {
                    fontFamily: 'Inter-Bold',
                    fontSize: '20',
                },
                headerTintColor: COLORS.black,
            }}>
            <Stack.Screen
                name="Categorias"
                component={Categories}
                options={{
                    CardStyleInterpolators: CardStyleInterpolators.forFadeFromCenter,
                    presentation: 'card',
                }}
            />
            <Stack.Screen
                name="Productos"
                component={Product}
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-sharp" size={30} color={COLORS.black} />
                            <Text style={[styles.goBackText, COLORS.text]}>Volver</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

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

export default ShopNavigator;
