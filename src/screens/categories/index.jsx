import { styles } from './styles';
import { SafeAreaView, FlatList, useWindowDimensions } from 'react-native';
import CATEGORIES from '../../constants/data/categories.json';
import { CategoryItem } from '../../components';

const Categories = ({ onSelectCategory }) => {
    const { width, height, scale, fontScale } = useWindowDimensions();

    console.warn({
        width,
        height,
        scale,
        fontScale,
    });
    return (
        <SafeAreaView style={styles.container}>
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
};

export default Categories;
