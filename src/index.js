import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from './components';
import Categories from './screens/categories';
import { useState } from 'react';

export default function App() {
    const [isCategorySelect, SetIsCategorySelect] = useState(false);
    const onSelectCategory = (categoryId) => {
        console.warn({ categoryId });
        SetIsCategorySelect(true);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={'Categorias'} />
                {isCategorySelect ? (
                    <Text>Categoria seleccionada</Text>
                ) : (
                    <Categories onSelectCategory={onSelectCategory} />
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
