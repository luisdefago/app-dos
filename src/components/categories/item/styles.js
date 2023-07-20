import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
        borderRadius: 10,
    },
    imageBackground: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
    },
    imageBackgroundTablet: {
        width: '100%',
        height: 250,
        justifyContent: 'flex-end',
    },
    categoyName: {
        fontSize: 20,
        fontFamily: 'Inter-Medium',
        color: COLORS.white,
        padding: 20,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
    categoyNameTablet: {
        fontSize: 35,
        fontFamily: 'Inter-Medium',
        color: COLORS.white,
        padding: 20,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
});
