import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    containerTablet: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        color: COLORS.white,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
    titleTablet: {
        fontSize: 35,
        fontFamily: 'Inter-Bold',
        color: COLORS.white,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
});
