import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';

function RootNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default RootNavigator;
