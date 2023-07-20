import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../../themes';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
    const { width, height, scale, fontScale } = useWindowDimensions();

    return (
        <TouchableHighlight
            onPress={() => onSelectCategory(id)}
            style={[styles.container, { backgroundColor }]}
            underlayColor={COLORS.primary}>
            <ImageBackground
                source={{ uri: backgroundImage }}
                style={width > 650 ? styles.imageBackgroundTablet : styles.imageBackground}
                resizeMode={width > 650 ? 'contain' : 'cover'}>
                <Text style={width > 650 ? styles.categoyNameTablet : styles.categoyName}>
                    {name}
                </Text>
            </ImageBackground>
        </TouchableHighlight>
    );
};

export default CategoryItem;
