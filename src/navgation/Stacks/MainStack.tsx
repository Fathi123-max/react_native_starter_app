import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StackNames } from "../StackNames";
import AuthStack from "./AuthStack/AuthStack";
import ShardStack from "./ShardStack/ShardStack";
import TapsStack from "./TapsStack/TapsStack";

export default function MainStack() {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator initialRouteName={StackNames.Auth}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={StackNames.Auth}
        component={AuthStack}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={StackNames.Main}
        component={TapsStack}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={StackNames.Shard}
        component={ShardStack}
      />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [StackNames.Auth]: undefined;
  [StackNames.Main]: undefined;
  [StackNames.Shard]: undefined;
};
