import React from "react";
import { Pressable, ScrollView, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Screen } from "../components/Screen";
import { products } from "../data/products";
import { ProductDetailsSection, ProductHeroSection, SustainableChoicesSection } from "../sections/ProductDetailsSections";
import { GlowBlob } from "../components/GlowBlob";

export function ProductDetailsScreen({ route, navigation }: any) {
  const product = route.params?.product ?? products[3];

  return (
    <Screen className="flex-1 overflow-hidden" safeBottom={false}>
      <GlowBlob className="-top-[80px] -left-24" size={220} />
      <GlowBlob className="-bottom-[40px] -right-[80px]" />
      <ScrollView contentContainerClassName="px-[18px] pt-2 pb-12" showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.goBack()} className="flex-row items-center mb-4 self-start">
          <Svg width={8} height={12} viewBox="0 0 8 12">
            <Path d="M7 1 1 6l6 5" fill="none" stroke="#295B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <Text className="text-[#295B3E] text-[13px] ml-1.5" style={{ fontFamily: "Inter_500Medium" }}>
            Go back
          </Text>
        </Pressable>
        <ProductHeroSection product={product} />
        <ProductDetailsSection product={product} />
        <SustainableChoicesSection />
      </ScrollView>
    </Screen>
  );
}
