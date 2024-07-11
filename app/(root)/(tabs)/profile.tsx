import { useAuth } from '@/context/auth';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet } from 'react-native';
import { Avatar, Caption, Title } from 'react-native-paper';
import { AntDesign, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Profile() {
  const { signOut } = useAuth()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.user_info_section}>
        <Avatar.Image
          source={{
            uri: 'https://yuefii.my.id/profile.jpg',
          }}
          size={130}
        />
        <View style={{ marginTop: 16 }}>
          <Title style={styles.title}>Upii</Title>
          <Caption style={styles.caption}>@yuefii</Caption>
        </View>
        <Pressable style={styles.button}>
          <Text style={{ textAlign: 'center' }}>Edit Profile</Text>
        </Pressable>
      </View>
      <View style={styles.info_section}>
        <Text style={styles.info_section_text}>Information</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="#777777" />
        <Pressable style={styles.info_section_button}>
          <View style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
          }}>
            <FontAwesome6
              name="book"
              size={28}
              color="#10b981" />
            <Text style={{
              fontSize: 16,
              paddingLeft: 5
            }}>My Course</Text>
          </View>
          <AntDesign
            name="right"
            size={20}
            color="white" />
        </Pressable>
        <Pressable style={styles.info_section_button}>
          <View
            style={{
              gap: 10,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwesome6
              name="bars-progress"
              size={28}
              color="#10b981" />
            <Text style={{
              fontSize: 16,
              paddingLeft: 5
            }}>My Progress</Text>
          </View>
          <AntDesign
            name="right"
            size={20}
            color="white" />
        </Pressable>
        <Pressable style={styles.info_section_button}>
          <View style={{
            gap: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <MaterialCommunityIcons
              name="progress-check"
              size={28}
              color="#10b981" />
            <Text style={{
              fontSize: 16,
              paddingLeft: 5
            }}>My Achievement</Text>
          </View>
          <AntDesign
            name="right"
            size={20}
            color="white" />
        </Pressable>
        <Pressable
          onPress={signOut}
          style={styles.info_section_button}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10, alignItems:
                'center'
            }}>
            <MaterialCommunityIcons
              name="logout"
              size={28}
              color="#10b981" />
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 5
              }}>Log out</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  user_info_section: {
    marginTop: 30,
    alignItems: 'center'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#777777',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#10b981',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 10
  },
  info_section: {
    marginTop: 20
  },
  info_section_text: {
    fontSize: 20,
    padding: 10
  },
  info_section_button: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    marginLeft: 10,
    marginRight: 10
  },
});
