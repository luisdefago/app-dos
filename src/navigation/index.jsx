import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';
import { useState } from 'react';
import AuthNavigator from './auth';

function RootNavigator() {
    const [userId, setUserId] = useState(null);
    return (
        <NavigationContainer>{userId ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>
    );
}

export default RootNavigator;
