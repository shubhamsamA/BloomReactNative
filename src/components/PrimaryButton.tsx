import React from "react";
import { Pressable, Text } from "react-native";

export function PrimaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} className="bg-[#295B3F] min-h-[46px] rounded-[24px] items-center justify-center px-4 mt-[12px]">
      <Text className="text-white text-[16px] font-inter">{title}</Text>
    </Pressable>
  );
}
