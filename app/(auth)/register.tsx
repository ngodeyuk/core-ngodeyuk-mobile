import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, TextInput } from "react-native";

export default function Register() {
    return (
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
                }}>Daftarkan Sekarang</Text>
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
                    placeholder="Nama Lengkap"
                    placeholderTextColor="#003f5c"
                // value={name}
                // onChangeText={text => setName(text)}
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
                    placeholder="Nama Pengguna"
                    placeholderTextColor="#003f5c"
                // value={username}
                // onChangeText={text => setUsername(text)}
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
                // value={password}
                // onChangeText={text => setPassword(text)}
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
            }}>
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
                }}>Kamu sudah punya akun?
                <Link
                    style={{
                        color: "#14b8a6"
                    }}
                    href="/register"> Gabung sekarang!
                </Link>
            </Text>
        </SafeAreaView>
    );
}