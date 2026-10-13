import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { productImageSource, type Product } from "../data/products";

export function TrendCard({
  product,
  index = 1,
  dark = false,
}: {
  product: Product;
  index?: number;
  dark?: boolean;
}) {
  return (
    <View className={`rounded-[16px] p-3 mb-2.5 flex-row ${dark ? "bg-[#295B3E]" : "bg-white"}`}>
      <View className="flex-1 pr-2">
        <Text className={`text-[13px] mb-0.5 ${dark ? "text-white" : "text-black"}`} style={{ fontFamily: "Inter_700Bold" }}>
          {index}. {product.subtitle}
        </Text>
        <Text className={`text-[10px] mb-2 ${dark ? "text-[#C8D8CB]" : "text-[#6B6B6B]"}`}>
          Alternative of: {product.alternativeOf ?? product.name}
        </Text>
        <View className="flex-row items-start gap-1.5 mb-1.5">
          <View className="w-[7px] h-[7px] rounded-full mt-[3px] bg-[#2F9E5C]" />
          <Text className={`flex-1 text-[10px] leading-[14px] ${dark ? "text-white" : "text-[#444]"}`}>
            No ingredients that threaten species
          </Text>
        </View>
        <View className="flex-row items-start gap-1.5 mb-1.5">
          <View className="w-[7px] h-[7px] rounded-full mt-[3px] bg-[#F3A847]" />
          <Text className={`flex-1 text-[10px] leading-[14px] ${dark ? "text-white" : "text-[#444]"}`}>
            Packaging with medium impact
          </Text>
        </View>
        <View className="flex-row items-start gap-1.5 mb-1.5">
          <View className="w-[7px] h-[7px] rounded-full mt-[3px] bg-[#2F9E5C]" />
          <Text className={`flex-1 text-[10px] leading-[14px] ${dark ? "text-white" : "text-[#444]"}`}>
            Equal to driving {product.carbonKm ?? "0.5"} km in petrol car
          </Text>
        </View>
        <Pressable className={`self-start px-3 py-1.5 rounded-full mt-2 ${dark ? "bg-white" : "bg-[#295B3E]"}`}>
          <Text className={`text-[10px] ${dark ? "text-[#295B3E]" : "text-white"}`} style={{ fontFamily: "Inter_700Bold" }}>
            Know more
          </Text>
        </Pressable>
      </View>
      <View className={`w-[68px] h-[92px] rounded-[10px] overflow-hidden self-center ${dark ? "bg-white" : "bg-[#F4F7EA]"}`}>
        <Image
          source={productImageSource(product.image)}
          style={{ width: 68, height: 92 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
