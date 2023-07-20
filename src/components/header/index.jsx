import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from './styles';

const Header = ({ title }) => {
    const { width, height, scale, fontScale } = useWindowDimensions();

    return (
        <View style={width > 650 ? styles.containerTablet : styles.container}>
            <Text style={width > 650 ? styles.titleTablet : styles.title}>{title}</Text>
        </View>
    );
};

export default Header;
