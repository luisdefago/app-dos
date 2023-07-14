import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    listCategory: {
        gap: 15,
    },
    CategoryContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
});
