import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    goBack: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackText: {},
    products: {
        flex: 1,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {
        color: COLORS.text,
    },
});
