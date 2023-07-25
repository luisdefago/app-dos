import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './shop';

function RootNavigator() {
    return (
        <NavigationContainer>
            <ShopNavigator></ShopNavigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
