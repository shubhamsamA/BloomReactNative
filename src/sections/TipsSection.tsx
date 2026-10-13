import React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const TIP_ICON =
  "M7.46371 22.2182H11.8252C11.8252 23.4182 10.8439 24.4 9.64445 24.4C8.44504 24.4 7.46371 23.4182 7.46371 22.2182ZM5.28297 21.1273H14.0059V18.9455H5.28297V21.1273ZM17.8222 10.7637C17.8222 14.9309 14.9218 17.1564 13.7115 17.8546H5.57737C4.36706 17.1564 1.46667 14.9309 1.46667 10.7637C1.46667 6.2473 5.13032 2.58184 9.64445 2.58184C14.1586 2.58184 17.8222 6.2473 17.8222 10.7637ZM23.1323 8.44002L21.6385 9.1273L23.1323 9.81457L23.8193 11.3091L24.5062 9.81457L26 9.1273L24.5062 8.44002L23.8193 6.94548L23.1323 8.44002ZM20.5482 6.94548L21.5731 4.69821L23.8193 3.67275L21.5731 2.6473L20.5482 0.400024L19.5232 2.6473L17.277 3.67275L19.5232 4.69821L20.5482 6.94548Z";

export function TipsSection() {
  return (
    <View className="w-[355px] h-[103px] mt-4 self-center bg-[#295B3E] rounded-[10px] p-6 flex-row items-center gap-2.5 opacity-100">
      <Svg width={24.53} height={24} viewBox="0 0 28 27">
        <Path d={TIP_ICON} fill="#EAFCF0" />
      </Svg>
      <View className="flex-1">
        <Text className="text-white text-[16px] font-inter font-bold" style={{ fontWeight: "700" }}>
          Tips
        </Text>
        <Text className="text-[#EAFCF0] text-[18px] mt-0.5 font-inter font-medium" style={{ fontWeight: "500" }}>
          Reduce your carbon footprint
        </Text>
      </View>
    </View>
  );
}
  