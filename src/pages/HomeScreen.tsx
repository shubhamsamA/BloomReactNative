import React from "react";
import { ScrollView, Text } from "react-native";
import { GlowBlob } from "../components/GlowBlob";
import { Logo } from "../components/Logo";
import { Screen } from "../components/Screen";
import { products } from "../data/products";
import { CarbonImpactSection } from "../sections/CarbonImpactSection";
import { ConsumerTrendsSection } from "../sections/ConsumerTrendsSection";
import { HistoryPreviewSection } from "../sections/HistoryPreviewSection";
import { HomeStatsSection } from "../sections/HomeStatsSection";
import { TipsSection } from "../sections/TipsSection";

export function HomeScreen({ navigation }: any) {
  return (
    <Screen className="flex-1 bg-[#F6F8E9] overflow-hidden" safeBottom={false}>
      <GlowBlob className="-top-[80px] -left-24" size={220} />
      <GlowBlob className="-bottom-[40px] -right-[80px]" />
      <ScrollView contentContainerClassName="px-[18px] pt-2 pb-10" showsVerticalScrollIndicator={false}>
        <Logo dark horizontal />
        <Text className="text-[26px] text-black mb-3.5 pt-9 pb-2" style={{ fontFamily: "Inter_800ExtraBold" }}>
          Welcome User!
        </Text>
        <HomeStatsSection />
        <CarbonImpactSection />
        <TipsSection />
        <HistoryPreviewSection
          products={products.slice(0, 2)}
          onShowMore={() => navigation.navigate("History")}
          onOpenProduct={(product) => navigation.navigate("ProductDetails", { product })}
        />
        <ConsumerTrendsSection products={[products[0], products[1]]} />
      </ScrollView>
    </Screen>
  );
}
