import { styles } from './styles';
import { SafeAreaView, FlatList, View, ActivityIndicator } from 'react-native';
import { CategoryItem } from '../../components';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

const Categories = ({ navigation }) => {
    const { data, error, isLoading } = useGetCategoriesQuery();
    const orientation = useOrientation();
    const onSelectCategory = ({ categoryId, color, name }) => {
        navigation.navigate('Productos', { categoryId, color, name });
    };

    if (isLoading)
        return (
            <View style={styles.containerLoader}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.CategoryContainer}
                contentContainerStyle={styles.listCategory}
                data={data}
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
        </View>
    );
};

export default Categories;
