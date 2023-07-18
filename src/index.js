import { View, SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { Header } from './components';
import Categories from './screens/categories';
import { useState } from 'react';
import { Products } from './screens';

export default function App() {
    const [isCategorySelect, SetIsCategorySelect] = useState(false);
    const [selectedCategory, SetSelectedCategory] = useState(null);

    const headerTitle = isCategorySelect ? 'Productos' : 'Categorias';

    const onHandleSelectCagergory = (categoryId) => {
        SetSelectedCategory(categoryId);
        SetIsCategorySelect(!isCategorySelect);
    };
    const onHandleNavigate = (categoryId) => {
        SetIsCategorySelect(!isCategorySelect);
        SetSelectedCategory(null);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={headerTitle} />
                {isCategorySelect ? (
                    <Products onHandleGoBack={onHandleNavigate} />
                ) : (
                    <Categories onSelectCategory={onHandleSelectCagergory} />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
