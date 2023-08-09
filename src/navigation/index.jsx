import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';
import { useState } from 'react';
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';

function RootNavigator() {
    const auth = useSelector((state) => state.auth.user);
    console.warn({ auth });
    return (
        <NavigationContainer>
            {auth?.localId ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default RootNavigator;
