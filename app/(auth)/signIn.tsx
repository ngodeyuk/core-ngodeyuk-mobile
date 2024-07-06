import { useAuth } from '@/context/auth'
import { useState } from 'react'
import { Text, View } from '@/components/Themed'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Image, Pressable, StyleSheet, TextInput } from 'react-native'

export default function SignIn() {
    const { signIn } = useAuth()
    const [secureEntery, setSecureEntery] = useState(true)
    console.log(signIn)

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@/assets/images/core/logo.png')} />
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor='white'
                    keyboardType="default"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor='white'
                    keyboardType="default"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor='white'
                    secureTextEntry={secureEntery}
                />
                <Pressable
                    onPress={() => {
                        setSecureEntery((prev) => !prev);
                    }}
                >
                    <SimpleLineIcons name={"eye"} size={20} color='white' />
                </Pressable>
            </View>
            <Pressable style={styles.loginButtonWrapper} onPress={signIn}>
                <Text style={styles.loginText}>Sign In</Text>
            </Pressable>
            <View style={styles.footerContainer}>
                <Text style={styles.accountText}>Don’t have an account?</Text>
                <Pressable>
                    <Text style={styles.signupText}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    logo: {
        width: 200,
        height: 200,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        color: 'white'
    },
    loginButtonWrapper: {
        backgroundColor: '#10b981',
        borderRadius: 100,
        marginTop: 20,
        width: 10 * 33,
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        padding: 10,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: 'white',
    },
    signupText: {
        color: '#10b981',
    },
});
