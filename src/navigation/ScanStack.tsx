import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetailsScreen } from "../pages/ProductDetailsScreen";
import { ScanScreen } from "../pages/ScanScreen";
import type { ScanStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<ScanStackParamList>();

export function ScanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScanMain" component={ScanScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}
