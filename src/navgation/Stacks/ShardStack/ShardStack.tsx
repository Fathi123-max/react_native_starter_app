import ArticleScreen from "@/src/screens/ArticleScreen/ArticleScreen";
import { ArticalType } from "@/src/types/ArticleType";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenNames } from "../../ScreenNames";

export default function ShardStack() {
  const Stack = createNativeStackNavigator<ShardStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNames.Article}
        component={ArticleScreen}
      />
    </Stack.Navigator>
  );
}

export type ShardStackParamList = {
  [ScreenNames.Article]: { article: ArticalType };
};
