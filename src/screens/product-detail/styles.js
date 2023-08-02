import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        flex: 1,
        padding: 20,
        gap: 10,
    },
    name: {
        fontFamily: 'Inter-Bold',
        fontSize: 18,
    },
    description: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
    },
    price: {
        fontFamily: 'Inter-Bold',
        fontSize: 20,
    },
    containerTags: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
    },
    containerTag: {
        padding: 10,
        borderRadius: 10,
    },
    tag: {
        color: COLORS.white,
    },
    addToCartButton: {
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartText: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: COLORS.white,
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
