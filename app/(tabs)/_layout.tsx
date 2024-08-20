import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} color={color} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="(banks)"
        options={{
          title: "Banks",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} color={color} name="bank" />
          ),
        }}
      />

      <Tabs.Screen
        name="calculate"
        options={{
          title: "Calculate",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} color={color} name="exchange" />
          ),
        }}
      />
    </Tabs>
  );
};
export default Layout;
