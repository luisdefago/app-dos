import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Ordenes de compra"
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
            <Stack.Screen name="Ordenes de compra" component={Orders} />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;
