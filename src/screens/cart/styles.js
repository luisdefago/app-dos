import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
    },
    listContainer: {
        flex: 1,
    },
    footerContainer: {
        backgroundColor: COLORS.secodary,
        borderTopColor: COLORS.primary,
        borderTopWidth: 4,
        padding: 10,
    },
    checkoutButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    checkoutButtonText: {
        color: COLORS.white,
        fontFamily: 'Inter-Bold',
    },
    totalContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    totalText: {
        color: COLORS.white,
        fontFamily: 'Inter-Bold',
    },
    totalPriceText: {
        color: COLORS.white,
        fontFamily: 'Inter-Bold',
    },
});
