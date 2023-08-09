import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/authSlice';

const Auth = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const headerTitle = isLogin ? 'Entrar' : 'Registrarse';
    const buttonTitle = isLogin ? 'Entrar' : 'Registrarse';
    const messageText = isLogin ? 'Crear cuenta' : '¿Ya tienes una cuenta?';

    const [signIn, { data }] = useSignInMutation();

    const [signUp] = useSignUpMutation();

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email, password });
                if (result?.data) dispatch(setUser(result.data));
            } else {
                await signUp({ email, password });
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*********"
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
            <View style={styles.linkContainer}></View>
            <TouchableOpacity style={styles.link} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.linkText}>{messageText}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
                    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Auth;
