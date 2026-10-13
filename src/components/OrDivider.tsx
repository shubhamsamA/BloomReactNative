import React from "react";
import { Text, View } from "react-native";

export function OrDivider() {
  return (
    <View className="flex-row items-center gap-2.5 my-[18px]">
      <View className="flex-1 h-px bg-[#C5CEB4]" />
      <Text className="text-[#262626] text-[14px] font-bold font-inter leading-[24px] tracking-wider" style={{ fontWeight: "700" }}>or</Text>
      <View className="flex-1 h-px bg-[#C5CEB4]" />
    </View>
  );
}
