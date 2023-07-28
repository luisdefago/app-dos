import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Carrito"
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
            <Stack.Screen name="Carrito" component={Cart} />
        </Stack.Navigator>
    );
};

export default CartNavigator;
