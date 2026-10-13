import React from "react";
import { Text, View } from "react-native";

export function Stat({ title, value }: { title: string; value: string }) {
  return (
    <View className="w-[138px] h-[145px] bg-[#295B3E] rounded-[20px] p-[10px]">
      <View className="w-[118px] h-[125px] bg-white rounded-[10px] border-[1px] border-white items-center justify-center px-2">
        <Text className="text-black text-[14px] text-center font-inter font-medium leading-[100%] tracking-normal" style={{ fontWeight: "500" }}>
          {title}
        </Text>
        <Text className="text-[28px] text-[#295B3E] mt-2 font-inter leading-[100%] tracking-normal" style={{ fontFamily: "Inter_700Bold" }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
