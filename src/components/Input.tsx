import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type IconName = "email" | "lock" | "eye" | "eye-off";

function FieldIcon({ name }: { name: IconName }) {
  const stroke = "#8A9380";
  if (name === "email") {
    return (
      <Svg width="16px" height="16px" viewBox="0 0 24 24">
        <Path d="M3.5 6.5h17v11h-17z" fill="none" stroke={stroke} strokeWidth="1.7" />
        <Path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
      </Svg>
    );
  }
  if (name === "lock") {
    return (
      <Svg width="16px" height="16px" viewBox="0 0 24 24">
        <Path d="M7 11h10v9H7z" fill="none" stroke={stroke} strokeWidth="1.7" />
        <Path d="M8.5 11V8.2a3.5 3.5 0 0 1 7 0V11" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      </Svg>
    );
  }
  if (name === "eye-off") {
    return (
      <Svg width="16px" height="16px" viewBox="0 0 24 24">
        <Path d="M3 3l18 18" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        <Path d="M2.5 12s3.6-6.5 9.5-6.5c1.4 0 2.7.3 3.8.9M21.5 12s-3.6 6.5-9.5 6.5c-1.4 0-2.7-.3-3.8-.9" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        <Circle cx="12" cy="12" r="2.4" fill="none" stroke={stroke} strokeWidth="1.7" />
      </Svg>
    );
  }
  return (
    <Svg width="16px" height="16px" viewBox="0 0 24 24">
      <Path d="M2.5 12s3.6-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.6 6.5-9.5 6.5S2.5 12 2.5 12Z" fill="none" stroke={stroke} strokeWidth="1.7" />
      <Circle cx="12" cy="12" r="2.6" fill="none" stroke={stroke} strokeWidth="1.7" />
    </Svg>
  );
}

export function Input({
  label,
  placeholder,
  secure,
  icon,
}: {
  label: string;
  placeholder: string;
  secure?: boolean;
  icon?: "email" | "lock";
}) {
  const [hidden, setHidden] = useState(!!secure);
  return (
    <View className="h-[68px] gap-[6px] justify-start">
      <Text className="text-[14px] h-[22px] font-medium font-inter text-[#262626] leading-[22px]" style={{ fontWeight: "500" }}>{label}</Text>
      <View className="h-[40px] rounded-[10px] border-[1.5px] border-[#F4FBDE] bg-[#e3eeb5] px-[13px] flex-row items-center">
        {icon ? (
          <View className="w-[22px] items-center justify-center text-[#717171] ">
            <FieldIcon name={icon} />
          </View>
        ) : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#717171"
          secureTextEntry={secure ? hidden : false}
          className="flex-1 h-full px-2 font-inter text-[14px] text-[#141414]"
        />
        {secure ? (
          <Pressable onPress={() => setHidden((value) => !value)} className="w-[22px] items-center justify-center" hitSlop={8}>
            <FieldIcon name={hidden ? "eye" : "eye-off"} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
