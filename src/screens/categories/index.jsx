import { styles } from './styles';
import { SafeAreaView, FlatList, useWindowDimensions } from 'react-native';
import { CategoryItem } from '../../components';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useSelector } from 'react-redux';

const Categories = ({ navigation }) => {
    const categories = useSelector((state) => state.categories.data);
    const orientation = useOrientation();
    const onSelectCategory = ({ categoryId, color, name }) => {
        navigation.navigate('Productos', { categoryId, color, name });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.CategoryContainer}
                contentContainerStyle={styles.listCategory}
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem
                        {...item}
                        onSelectCategory={() =>
                            onSelectCategory({
                                categoryId: item.id,
                                color: item.backgroundColor,
                                name: item.name,
                            })
                        }
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
