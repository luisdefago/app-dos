import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from './components';
import { COLORS } from './themes';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={'Categorias'} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});
