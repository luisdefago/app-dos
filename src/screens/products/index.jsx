import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components';
import { useState } from 'react';
import { COLORS } from '../../themes';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json';

const Products = ({ onHandleGoBack, categoryId }) => {
    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState(COLORS.primary);
    const onHandleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
    };
    const onHandleFocus = () => {};
    const filteredProducts = PRODUCTS.filter((product) => product.categoryId == categoryId);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                <Ionicons name="arrow-back-sharp" size={30} color={COLORS.black} />
                <Text style={[styles.goBackText, COLORS.text]}>Volver</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Input
                    onHandleBlur={onHandleBlur}
                    onHandleChangeText={onHandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder="Buscar"
                    borderColor={borderColor}
                />
                <Ionicons name="ios-search" size={30} color={COLORS.text} />
                {search.length > 0 && <Ionicons name="close-sharp" size={30} color="black" />}
            </View>
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString}
            />
        </View>
    );
};

export default Products;
