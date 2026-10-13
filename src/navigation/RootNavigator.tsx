import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { CREAM } from "../theme/colors";
import type { RootStackParamList } from "../types/navigation";
import { AuthNavigator } from "./AuthNavigator";
import { MainTabs } from "./MainTabs";

const Root = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: CREAM } }}>
      <StatusBar style="dark" />
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="Auth" component={AuthNavigator} />
        <Root.Screen name="Main" component={MainTabs} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
