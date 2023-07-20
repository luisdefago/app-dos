import { styles } from './styles';
import { SafeAreaView, FlatList, useWindowDimensions } from 'react-native';
import CATEGORIES from '../../constants/data/categories.json';
import { CategoryItem } from '../../components';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

const Categories = ({ onSelectCategory }) => {
    const orientation = useOrientation();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.CategoryContainer}
                contentContainerStyle={styles.listCategory}
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <CategoryItem
                        {...item}
                        onSelectCategory={onSelectCategory}
                        style={
                            orientation === ORIENTATION.LANDSCAPE
                                ? styles.categoryItemLandscape
                                : {}
                        }
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default Categories;
