import { View, Button, Text } from 'react-native';
import { styles } from './styles';

const Products = ({ onHandleGoBack }) => {
    return (
        <View style={styles.container}>
            <Button title="Volver" onPress={onHandleGoBack} />
            <Text>Categoria seleccionada</Text>
        </View>
    );
};

export default Products;
