import FavScreen from "@/src/screens/FavScreen/FavScreen";
import HomeScreen from "@/src/screens/HomeScreen/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScreenNames } from "../../ScreenNames";

const Tab = createBottomTabNavigator<TapsStackParamList>();

const CustomTabBarIcon = ({
  focused,
  iconName,
  label,
}: {
  focused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
}) => (
  <View style={styles.tabIconContainer}>
    <Ionicons
      name={iconName}
      size={24}
      color={focused ? Colors.primary : Colors.gray}
    />
    {/* <CustomTabBarLabel focused={focused} label={label} /> */}
  </View>
);

export default function TapsStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
      }}
    >
      <Tab.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? "home" : "home-outline"}
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Fav}
        component={FavScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? "heart" : "heart-outline"}
              label="Favorites"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderTopWidth: 0,
    paddingBottom: 0,
    paddingTop: 10,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: Platform.OS === "ios" ? 5 : 0,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.gray,
  },
  tabLabelFocused: {
    color: Colors.primary,
    fontWeight: "600",
  },
});

export type TapsStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Fav]: undefined;
};
