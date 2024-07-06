import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/auth';

export default function SignIn() {
    const { signIn } = useAuth()
    console.log(signIn);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button title='Sign In' color='green' onPress={signIn} />
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
