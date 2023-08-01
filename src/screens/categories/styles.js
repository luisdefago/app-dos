import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listCategory: {
        gap: 15,
    },
    CategoryContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    categoryItemLandscape: {
        height: 100,
    },
});
