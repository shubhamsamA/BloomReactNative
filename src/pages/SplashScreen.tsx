import React, { useEffect } from "react";
import { View } from "react-native";
import { GlowBlob } from "../components/GlowBlob";
import { Logo } from "../components/Logo";

export function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("Login"), 1600);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-bloom-cream items-center justify-center overflow-hidden">
      <GlowBlob className="-top-[70px] -left-20" size={220} />
      <GlowBlob className="-bottom-[90px] -right-[90px]" />
      <Logo />
    </View>
  );
}
