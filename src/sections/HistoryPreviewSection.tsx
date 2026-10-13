import React from "react";
import { View } from "react-native";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import type { Product } from "../data/products";

export function HistoryPreviewSection({
  products,
  onShowMore,
  onOpenProduct,
}: {
  products: Product[];
  onShowMore: () => void;
  onOpenProduct: (product: Product) => void;
}) {
  return (
    <>
      <SectionHeader title="History" action="Show more" onPress={onShowMore} />
      <View className="flex-row flex-wrap justify-between" style={{ rowGap: 10 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onPress={() => onOpenProduct(product)} />
        ))}
      </View>
    </>
  );
}
