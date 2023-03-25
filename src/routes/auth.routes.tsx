import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Auth/Login/Login";
import { Register } from "../screens/Auth/Register/Login";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
