import React from "react";
import { Pressable, Text, View } from "react-native";
import { createBottomTabNavigator, type BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { HomeStack } from "./HomeStack";
import { ProfileScreen } from "../pages/ProfileScreen";
import { ScanStack } from "./ScanStack";
import type { TabParamList } from "../types/navigation";

const Tabs = createBottomTabNavigator<TabParamList>();
const BAR = "#295B3F";
const PILL = "#F6F8E9";

function TabIcon({ name, color }: { name: "Home" | "Scan" | "Profile"; color: string }) {
  if (name === "Home") {
    return (
      <Svg width={18} height={18} viewBox="0 0 24 24">
        <Path d="M4 10.5 12 4l8 6.5V20h-5.5v-6h-5v6H4V10.5Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      </Svg>
    );
  }
  if (name === "Scan") {
    return (
      <Svg width={18} height={18} viewBox="0 0 24 24">
        <Path d="M7 4H4v3M17 4h3v3M7 20H4v-3M17 20h3v-3" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <Rect x="8" y="8" width="8" height="8" rx="1.5" fill="none" stroke={color} strokeWidth="1.6" />
      </Svg>
    );
  }
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Circle cx="12" cy="8" r="3.2" fill="none" stroke={color} strokeWidth="1.8" />
      <Path d="M5 19c1.8-3.2 4-4.8 7-4.8s5.2 1.6 7 4.8" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

function BloomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const labels = ["Home", "Scan", "Profile"] as const;

  return (
    <View
      style={{
        backgroundColor: BAR,
        borderTopWidth: 1,
        borderTopColor: "#D7E3B0",
        paddingBottom: Math.max(insets.bottom, 10),
        paddingTop: 10,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const label = labels[index];
        const color = focused ? BAR : "#FFFFFF";

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: "center" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: focused ? PILL : "transparent",
                paddingHorizontal: focused ? 16 : 8,
                paddingVertical: 8,
                borderRadius: 999,
              }}
            >
              <TabIcon name={label} color={color} />
              <Text numberOfLines={1} style={{ color, fontSize: 13, fontFamily: "Inter_500Medium" }}>
                {label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

export function MainTabs() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <BloomTabBar {...props} />}
      screenOptions={{ headerShown: false, freezeOnBlur: true }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Scan" component={ScanStack} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}
