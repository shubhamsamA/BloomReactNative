import React from "react";
import { Image, Text, View } from "react-native";
import { DETAIL_CARD, DetailInfoCard } from "../components/DetailInfoCard";
import { AppleIcon, BoxIcon, CarIcon, LeafIcon, WarningIcon } from "../components/DetailIcons";
import { EcoScoreMark, NovaScoreBar, NutriScoreBar } from "../components/ScoreBars";
import { TrendCard } from "../components/TrendCard";
import { productImageSource, products, type NutrientLevel, type Product } from "../data/products";

const GREEN = "#295B3E";
const RED = "#D94A2A";
const ECO = "#F5C518";

const ECO_CAPTION: Record<string, string> = {
  A: "Very low environmental impact",
  B: "Low environmental impact",
  C: "Moderate environmental impact",
  D: "High environmental impact",
  E: "Very high environmental impact",
};

function ecoGradeFromScore(score: number) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 40) return "D";
  return "E";
}

function isFood(product: Product) {
  return Boolean(product.nutrition && product.nutrition.calories !== "—");
}

function packagingLines(product: Product) {
  if (product.packagingItems?.length) return product.packagingItems;
  if (product.packaging) {
    return product.packaging.split(/[•,]/).map((part) => part.trim()).filter(Boolean);
  }
  return ["Not listed"];
}

function nutrientLevels(product: Product): NutrientLevel[] {
  if (product.nutrientLevels?.length) return product.nutrientLevels;
  const n = product.nutrition;
  if (!n || n.calories === "—") return [];
  const sat = parseFloat(n.saturatedFat);
  const sugar = parseFloat(n.sugars);
  const salt = parseFloat(n.salt);
  return [
    { name: "Saturated fat", quantity: n.saturatedFat, high: !Number.isNaN(sat) && sat >= 5 },
    { name: "Sugars", quantity: n.sugars, high: !Number.isNaN(sugar) && sugar >= 10 },
    { name: "Salt", quantity: n.salt, high: !Number.isNaN(salt) && salt >= 1 },
  ];
}

function SectionTitle({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
  return (
    <View className="flex-row items-center mb-2">
      {icon}
      <Text style={{ marginLeft: 8, color, fontSize: 15, fontFamily: "Inter_700Bold" }}>{title}</Text>
    </View>
  );
}

export function ProductHeroSection({ product }: { product: Product }) {
  return (
    <>
      <Text className="text-black text-[18px]" style={{ fontFamily: "Inter_700Bold" }}>
        Product Name: {product.name}
      </Text>
      <Text className="text-[#5C5C5C] text-[12px] mt-1">Barcode No: {product.barcode ?? "—"}</Text>
      <View style={[DETAIL_CARD, { height: 188, alignItems: "center", justifyContent: "center", marginTop: 12 }]}>
        <Image
          source={productImageSource(product.image)}
          style={{ width: "72%", height: "88%" }}
          resizeMode="contain"
        />
      </View>
    </>
  );
}

export function ProductDetailsSection({ product }: { product: Product }) {
  const ecoGrade = product.ecoGrade ?? ecoGradeFromScore(product.score);
  const food = isFood(product);
  const nutriGrade = product.nutriGrade ?? (food ? "C" : null);
  const nova = product.nova ?? (food ? 4 : null);
  const levels = nutrientLevels(product);
  const packaging = packagingLines(product);

  return (
    <>
      <Text className="text-black text-[20px] mt-2 mb-3" style={{ fontFamily: "Inter_800ExtraBold" }}>
        Product Details
      </Text>

      <DetailInfoCard row>
        <EcoScoreMark letter={ecoGrade} />
        <View style={{ flex: 1, marginLeft: 14, minWidth: 0 }}>
          <Text style={{ color: ECO, fontSize: 16, fontFamily: "Inter_700Bold" }}>Eco-Score {ecoGrade}</Text>
          <Text className="text-black text-[13px] mt-1">{product.ecoCaption ?? ECO_CAPTION[ecoGrade]}</Text>
        </View>
      </DetailInfoCard>

      <DetailInfoCard>
        <SectionTitle icon={<LeafIcon />} title="Ingredients" color={GREEN} />
        <Text className="text-black text-[13px] leading-[19px]">{product.ingredients ?? "Not listed"}</Text>
      </DetailInfoCard>

      <DetailInfoCard>
        <SectionTitle icon={<WarningIcon />} title="Allergens" color={GREEN} />
        <Text className="text-black text-[13px]">{product.allergens ?? "Not listed"}</Text>
      </DetailInfoCard>

      <DetailInfoCard>
        <SectionTitle icon={<AppleIcon />} title="Nutrition" color={RED} />
        {nutriGrade ? (
          <>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", marginTop: 4, marginBottom: 12 }}>
              <NutriScoreBar grade={nutriGrade} />
              <Text
                style={{
                  color: RED,
                  fontFamily: "Inter_700Bold",
                  fontSize: 12,
                  marginLeft: 8,
                  marginTop: 6,
                  flexGrow: 1,
                  flexShrink: 1,
                  minWidth: 120,
                }}
              >
                {product.nutriCaption ?? (nutriGrade === "E" || nutriGrade === "D" ? "Bad nutritional quality" : "Nutritional quality")}
              </Text>
            </View>
            {levels.length ? (
              <>
                <Text style={{ color: GREEN, fontSize: 14, fontFamily: "Inter_700Bold", marginBottom: 6 }}>Nutrient levels</Text>
                {levels.map((item) => (
                  <View key={item.name} className="flex-row items-start mt-1.5">
                    <View
                      className="w-2 h-2 rounded-full mt-[5px] mr-2"
                      style={{ backgroundColor: item.high ? RED : "#2F9E5C" }}
                    />
                    <Text className="flex-1 text-[13px] text-black">
                      {item.name} in {item.high ? "high" : "low"} quantity ({item.quantity})
                    </Text>
                  </View>
                ))}
              </>
            ) : null}
          </>
        ) : (
          <Text className="text-black text-[13px]">Not a food product</Text>
        )}
      </DetailInfoCard>

      {nova === 1 || nova === 2 || nova === 3 || nova === 4 ? (
        <DetailInfoCard>
          <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
            <NovaScoreBar value={nova} />
            <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 140, marginLeft: 8, marginTop: 8 }}>
              <Text style={{ color: RED, fontSize: 16, fontFamily: "Inter_700Bold" }}>NOVA: {nova}</Text>
              <Text className="text-black text-[13px] mt-1">
                {product.novaCaption ?? "Ultra-processed food and drink products"}
              </Text>
            </View>
          </View>
        </DetailInfoCard>
      ) : null}

      <DetailInfoCard row>
        <CarIcon />
        <View style={{ flex: 1, marginLeft: 12, minWidth: 0 }}>
          <Text style={{ color: RED, fontSize: 15, fontFamily: "Inter_700Bold" }}>Carbon footprint</Text>
          <Text className="text-black text-[13px] mt-1">
            Equal to driving {product.carbonKm ?? "0.5"} km in a petrol car
          </Text>
          {product.carbonDetail ? <Text className="text-black text-[13px] mt-0.5">{product.carbonDetail}</Text> : null}
        </View>
      </DetailInfoCard>

      <DetailInfoCard>
        <View className="flex-row items-center">
          <BoxIcon />
          <Text style={{ marginLeft: 8, color: GREEN, fontSize: 16, fontFamily: "Inter_700Bold" }}>Packaging</Text>
        </View>
        <View style={{ marginLeft: 30, marginTop: 8 }}>
          {packaging.map((line) => (
            <View key={line} className="flex-row items-start mt-1">
              <Text className="text-black text-[14px] mr-2 leading-[20px]">•</Text>
              <Text className="flex-1 text-black text-[14px] leading-[20px]">{line}</Text>
            </View>
          ))}
        </View>
      </DetailInfoCard>
    </>
  );
}

export function SustainableChoicesSection() {
  return (
    <>
      <Text className="text-black text-[16px] mt-3 mb-3" style={{ fontFamily: "Inter_700Bold" }}>
        Sustainable Choices
      </Text>
      <TrendCard product={products[0]} index={1} />
      <TrendCard product={products[1]} index={2} dark />
    </>
  );
}
