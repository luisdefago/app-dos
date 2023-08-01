import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../themes';

const CartItem = ({
    id,
    categoryId,
    name,
    price,
    image,
    currency,
    quantity,
    stock,
    onIncreaseCartItem,
    onDecreaseCartItem,
    onRemoveCartItem,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
                <Text style={styles.stock}>{`stock: ${stock}`}</Text>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        style={styles.increaseButton}
                        onPress={() => onIncreaseCartItem(id)}>
                        <Text style={styles.increaseButtonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.qty}>{`${quantity}`}</Text>
                    <TouchableOpacity
                        style={styles.decreaseButton}
                        onPress={() => onDecreaseCartItem(id)}>
                        <Text style={styles.decreaseButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onRemoveCartItem(id)}
                        style={styles.deleteButton}>
                        <Ionicons name="trash" size={22} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartItem;
