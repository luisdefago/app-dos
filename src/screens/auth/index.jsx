import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const headerTitle = isLogin ? 'Entrar' : 'Registrarse';
    const buttonTitle = isLogin ? 'Entrar' : 'Registrarse';
    const messageText = isLogin ? 'Crear cuenta' : '¿Ya tienes una cuenta?';
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="email@domain.com"
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*********"
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={() => {}}
                />
            </View>
            <View style={styles.linkContainer}></View>
            <TouchableOpacity style={styles.link} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.linkText}>{messageText}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Auth;
