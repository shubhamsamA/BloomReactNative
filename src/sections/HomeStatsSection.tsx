import React from "react";
import { View } from "react-native";
import { Stat } from "../components/Stat";

export function HomeStatsSection() {
  return (
    <View className="flex-row gap-16 items-center justify-center">
      <Stat title="Total Products Scanned" value="101" />
      <Stat title="Your Sustainable Products" value="50" />
    </View>
  );
}
