import React from "react";
import { Text, View } from "react-native";

export function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mt-2 rounded-lg bg-white border border-bloom-border overflow-hidden">
      <Text className="bg-bloom-soft p-2 text-[10px] font-black text-bloom-text">{title}</Text>
      <View className="p-2.5">{children}</View>
    </View>
  );
}

export function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between py-[3px] border-b border-[#EDF0E6]">
      <Text className="text-bloom-muted text-xs">{label}</Text>
      <Text className="font-bold text-bloom-text text-xs">{value}</Text>
    </View>
  );
}
