import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 65,
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
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.white,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
});
