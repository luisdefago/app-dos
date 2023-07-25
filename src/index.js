import { View, SafeAreaView, StyleSheet, Text, Button, ActivityIndicator } from 'react-native';
// import { Header } from './components';
// import Categories from './screens/categories';
// import { useState } from 'react';
// import { Products } from './screens';
import { useFonts } from 'expo-font';
import { COLORS } from './themes';
import RootNavigator from './navigation';

export default function App() {
    const [loaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    });

    // const [isCategorySelect, SetIsCategorySelect] = useState(false);
    // const [selectedCategory, SetSelectedCategory] = useState(null);

    // const headerTitle = isCategorySelect ? 'Productos' : 'Categorias';

    // const onHandleSelectCagergory = (categoryId) => {
    //     SetSelectedCategory(categoryId);
    //     SetIsCategorySelect(!isCategorySelect);
    // };
    // const onHandleNavigate = (categoryId) => {
    //     SetIsCategorySelect(!isCategorySelect);
    //     SetSelectedCategory(null);
    // };

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size={'large'} />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <RootNavigator />
        </SafeAreaView>
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
