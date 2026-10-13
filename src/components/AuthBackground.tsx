import React from "react";
import { ScrollView } from "react-native";
import { GlowBlob } from "./GlowBlob";
import { Screen } from "./Screen";

export function AuthBackground({ children }: { children: React.ReactNode }) {
  return (
    <Screen className="flex-1 bg-bloom-cream overflow-hidden">
      <GlowBlob className="-top-[70px] -left-20" size={220} />
      <GlowBlob className="-bottom-[90px] -right-[90px]" />
      <ScrollView contentContainerClassName="min-h-full px-7 py-8 justify-center">{children}</ScrollView>
    </Screen>
  );
}
