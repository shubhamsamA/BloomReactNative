import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { productImageSource, type Product } from "../data/products";

export function ProductCard({ product, onPress }: { product: Product; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "48%",
        height: 218,
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 8,
          top: 8,
          zIndex: 10,
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#295B3E", fontSize: 13 }}>♡</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 8 }}>
        <Image
          source={productImageSource(product.image)}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ backgroundColor: "#295B3E", paddingVertical: 8, paddingHorizontal: 10 }}>
        <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Inter_700Bold" }} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, marginTop: 2 }}>Details..</Text>
      </View>
    </Pressable>
  );
}
