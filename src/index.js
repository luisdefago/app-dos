import { View, StyleSheet, SafeAreaView, FlatList, Text, StatusBar } from 'react-native';
import { Header } from './components';
import { COLORS } from './themes';
import CATEGORIES from './constants/data/categories.json';
import { CategoryItem } from './components';

export default function App() {
    const onSelectCategory = (categoryId) => {
        console.warn({ categoryId });
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={'Categorias'} />
            </View>
            <FlatList
                style={styles.CategoryContainer}
                contentContainerStyle={styles.listCategory}
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <CategoryItem {...item} onSelectCategory={onSelectCategory} />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    listCategory: {
        gap: 15,
    },
    CategoryContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
});
