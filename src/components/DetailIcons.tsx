import React from "react";
import { Image } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const GREEN = "#295B3E";
const RED = "#D94A2A";

export function LeafIcon({ color = GREEN }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Path d="M5 13c0-5.5 5.5-10 14-10-1 8-4.5 14-12 14-1.2 0-2-.8-2-2v-2Z" fill={color} />
    </Svg>
  );
}

export function WarningIcon({ color = GREEN }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Path d="M12 3.5 22 20.5H2L12 3.5Z" fill={color} />
      <Path d="M12 9v6" stroke="#F6F8E9" strokeWidth="1.8" strokeLinecap="round" />
      <Circle cx="12" cy="17.2" r="1" fill="#F6F8E9" />
    </Svg>
  );
}

export function AppleIcon({ color = RED }: { color?: string }) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Path d="M12 7.2c-4.4 0-6.5 3.2-6.5 7.2 0 3.8 2.6 6.6 6.5 6.6s6.5-2.8 6.5-6.6c0-4-2.1-7.2-6.5-7.2Z" fill={color} />
      <Path d="M12 7.2c.4-1.8 1.6-3.4 3.4-4.2" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function CarIcon({ color = RED }: { color?: string }) {
  return (
    <Svg width={28} height={22} viewBox="0 0 28 22">
      <Path d="M4 12.5 6 7h16l2 5.5v4H4v-4Z" fill={color} />
      <Path d="M7 7 8.4 4.2h11.2L21 7" fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <Circle cx="8.2" cy="17.4" r="2" fill={color} />
      <Circle cx="19.8" cy="17.4" r="2" fill={color} />
    </Svg>
  );
}

export function BoxIcon() {
  return (
    <Image source={require("../../assets/box.png")} style={{ width: 18, height: 18 }} resizeMode="contain" />
  );
}
