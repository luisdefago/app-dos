import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useGetOrdersQuery } from '../../store/orders/api';
import OrderItem from '../../components/order/item';

const Orders = () => {
    const { data, error, isLoading } = useGetOrdersQuery();

    const renderItem = ({ item }) => <OrderItem {...item} />;

    const keyExtractor = (item) => item.id.toString();
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
    );
};

export default Orders;
