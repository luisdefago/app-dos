import { View, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS } from './themes';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    const [loaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size={'large'} />
            </View>
        );
    }
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootNavigator />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
