import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Categories, Product, ProductDetail } from '../screens';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../themes';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Categorias"
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
                animation: 'slide_from_right',
            }}>
            <Stack.Screen name="Categorias" component={Categories} />
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
                        </TouchableOpacity>
                    ),
                    title: route.params.name,
                })}
            />
            <Stack.Screen
                name="Detalles del producto"
                component={ProductDetail}
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-sharp" size={30} color={COLORS.black} />
                        </TouchableOpacity>
                    ),
                    title: route.params.name,
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
});

export default ShopNavigator;
