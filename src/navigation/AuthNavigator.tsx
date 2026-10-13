import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/LoginScreen";
import { SignupScreen } from "../pages/SignupScreen";
import { SplashScreen } from "../pages/SplashScreen";
import type { AuthStackParamList } from "../types/navigation";

const Auth = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Splash" component={SplashScreen} />
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Signup" component={SignupScreen} />
    </Auth.Navigator>
  );
}
