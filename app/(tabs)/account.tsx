import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthProvider";

export default function Accout() {
  const { setUser, user } = useAuth();
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account</Text>
      <Text>{ user && user.name }</Text>
      <TouchableOpacity onPress={() => setUser(null)}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}