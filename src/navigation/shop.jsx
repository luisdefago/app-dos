import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Categories, Product } from '../screens';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    CardStyleInterpolators: CardStyleInterpolators.forFadeFromCenter,
                    presentation: 'card',
                }}
            />
            <Stack.Screen
                name="Products"
                component={Product}
                options={{
                    CardStyleInterpolators: CardStyleInterpolators.forFadeFromCenter,
                    presentation: 'card',
                }}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;
