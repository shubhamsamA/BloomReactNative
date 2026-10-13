import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { GlowBlob } from "../components/GlowBlob";
import { Logo } from "../components/Logo";
import { ProductCard } from "../components/ProductCard";
import { Screen } from "../components/Screen";
import { products } from "../data/products";

export function HistoryScreen({ navigation }: any) {
  return (
    <Screen className="flex-1 bg-[#F6F8E9] overflow-hidden" safeBottom={false}>
      <GlowBlob className="-top-[80px] -left-24" size={220} />
      <GlowBlob className="-bottom-[40px] -right-[80px]" />
      <ScrollView contentContainerClassName="px-[18px] pt-2 pb-10" showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.goBack()} className="flex-row items-center mb-3 self-start">
          <Svg width={8} height={12} viewBox="0 0 8 12">
            <Path d="M7 1 1 6l6 5" fill="none" stroke="#295B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <Text className="text-[#295B3E] text-[13px] ml-1.5" style={{ fontFamily: "Inter_500Medium" }}>
            Go back
          </Text>
        </Pressable>
       
        <Text className="text-[26px] text-black mb-3.5 pt-6 pb-2" style={{ fontFamily: "Inter_800ExtraBold" }}>
          History
        </Text>
        <View className="flex-row flex-wrap justify-between" style={{ rowGap: 10 }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate("ProductDetails", { product })}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
