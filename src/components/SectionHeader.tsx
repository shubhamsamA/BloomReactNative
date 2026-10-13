import React from "react";
import { Pressable, Text, View } from "react-native";

export function SectionHeader({ title, action, onPress }: { title: string; action: string; onPress: () => void }) {
  return (
    <View className="flex-row justify-between items-center mt-5 mb-2.5">
      <Text className="text-[20px] text-black" style={{ fontFamily: "Inter_700Bold" }}>
        {title}
      </Text>
      <Pressable onPress={onPress} className="border border-[#C5D6A4] rounded-full px-3 py-1 bg-transparent">
        <Text className="text-[12px] text-[#295B3E]" style={{ fontFamily: "Inter_500Medium" }}>
          {action}
        </Text>
      </Pressable>
    </View>
  );
}
