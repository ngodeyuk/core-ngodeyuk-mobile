import { Link } from "expo-router";
import { useAuth } from "../../context/AuthProvider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { useState } from "react";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL || ""
    const requestBody = {
      username,
      password,
    }
    try {
      const response = await fetch(apiUrl + "/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Login gagal, Silahkan coba kembali.');
      }
      const data = await response.json();
      const token = data.token;
      setUser(token);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat login. Silakan coba lagi.')
    }
  }; return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center"
      }}>
      <StatusBar style="dark" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginVertical: 30,
          paddingHorizontal: 20
        }}>Selamat Datang</Text>
      <View style={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        padding: 20,
      }}>
        <TextInput
          style={{
            height: 50,
            color: 'black',
          }}
          placeholder="Nama Pengguna"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        padding: 20,
      }}>
        <TextInput
          style={{
            height: 50,
            color: 'black',
          }}
          placeholder="Kata Sandi"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Pressable style={{
        backgroundColor: '#14b8a6',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
      }} onPress={login}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        }}>Masuk</Text>
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          paddingVertical: 10
        }}>Kamu belum punya akun?
        <Link
          style={{
            color: "#14b8a6"
          }}
          href="/register"> Buat sekarang!
        </Link>
      </Text>
    </SafeAreaView>
  );
}
