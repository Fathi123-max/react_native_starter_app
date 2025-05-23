import LoginScreen from "@/src/screens/LoginScreen/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenNames } from "../../ScreenNames";

export default function AuthStack() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenNames.Login}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export type AuthStackParamList = {
  [ScreenNames.Login]: undefined;
};
