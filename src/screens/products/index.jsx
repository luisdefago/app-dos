import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../themes';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

const Product = ({ navigation, route }) => {
    const { categoryId, color } = route.params;
    const products = useSelector((state) => state.products);
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [borderColor, setBorderColor] = useState(COLORS.primary);

    const onHandleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
        filterBySearch(text);
    };
    const onHandleFocus = () => {};
    const filteredProductsByCategory = products.filter(
        (product) => product.categoryId === categoryId
    );

    const filterBySearch = (query) => {
        let updatedProducList = [...filteredProductsByCategory]; // Crear una copia independiente

        updatedProducList = updatedProducList.filter((product) => {
            return product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
        });
        setFilteredProducts(updatedProducList);
    };

    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    };

    const onSelectProduct = ({ productId, name }) => {
        navigation.navigate('Detalles del producto', { productId, color, name });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input
                    onHandleBlur={onHandleBlur}
                    onHandleChangeText={onHandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder="Buscar"
                    borderColor={borderColor}
                />
                {search.length > 0 && (
                    <Ionicons onPress={clearSearch} name="close-sharp" size={30} color="black" />
                )}
            </View>
            <FlatList
                style={styles.products}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => onSelectProduct({ productId: item.id, name: item.name })}>
                        <ImageBackground
                            source={{ uri: item.image }}
                            style={[styles.productImage, { backgroundColor: color }]}
                            resizeMethod="resize"
                            resizeMode="contain"
                        />
                        <View style={styles.productDetail}>
                            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                                {item.name}
                            </Text>
                            <Text
                                style={
                                    styles.productPrice
                                }>{`${item.currency.code} ${item.price}`}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.productsContent}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            {filteredProducts.length === 0 && search.length > 0 && (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>No se han encontrado productos</Text>
                </View>
            )}
        </View>
    );
};

export default Product;
