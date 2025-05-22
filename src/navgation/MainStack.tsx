import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ArticleScreen from "../screens/ArticleScreen/ArticleScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { ArticalType } from "../types/ArticleType";
import { ScreenNames } from "./ScreenNames";

export default function MainStack() {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.Article}
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Article]: { article?: ArticalType };
};
