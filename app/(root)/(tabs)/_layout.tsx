import React from 'react';
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Link, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { Pressable, StyleProp, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type IconLibrary = 'FontAwesome' | 'MaterialIcons';
interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'] | React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
  library: IconLibrary;
  style?: StyleProp<TextStyle>;
  focused?: boolean;
}

const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome);
const AnimatedMaterialIcons = Animated.createAnimatedComponent(MaterialIcons);

function TabBarIcon({
  name,
  color,
  library,
  style,
  focused
}: TabBarIconProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
  }));

  React.useEffect(() => {
    scale.value = focused ? 1.2 : 1;
  }, [focused]);

  const iconStyle = [
    { bottom: 20 },
    focused && {
      backgroundColor: "#10b981",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 30,
      height: 50
    },
    style,
    animatedStyle
  ];

  if (library === 'FontAwesome') {
    return <AnimatedFontAwesome
      name={name as React.ComponentProps<typeof FontAwesome>['name']}
      size={30}
      color={color}
      style={iconStyle} />;
  } else if (library === 'MaterialIcons') {
    return <AnimatedMaterialIcons
      name={name as React.ComponentProps<typeof MaterialIcons>['name']}
      size={30}
      color={color}
      style={iconStyle} />;
  } else {
    return null;
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, false),
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          padding: 0
        },
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) =>
            <TabBarIcon
              name="user"
              library="FontAwesome"
              color={color}
              focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
            <TabBarIcon
              name="home"
              library="FontAwesome"
              color={color}
              focused={focused} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, focused }) =>
            <TabBarIcon
              name="leaderboard"
              library="MaterialIcons"
              color={color}
              focused={focused} />,
        }}
      />
    </Tabs>
  );
}
