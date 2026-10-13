import React from "react";
import { Text } from "react-native";
import { TrendCard } from "../components/TrendCard";
import type { Product } from "../data/products";

export function ConsumerTrendsSection({ products }: { products: Product[] }) {
  return (
    <>
      <Text className="text-[20px] text-black mt-5" style={{ fontFamily: "Inter_700Bold" }}>
        Consumer Trends
      </Text>
      <Text className="text-[12px] text-[#6B6B6B] mb-2.5 mt-1">Alternate sustainable choices for your top scans</Text>
      {products.map((product, index) => (
        <TrendCard key={product.id} product={product} index={index + 1} dark={index % 2 === 1} />
      ))}
    </>
  );
}
