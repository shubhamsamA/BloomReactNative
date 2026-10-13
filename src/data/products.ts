import type { ImageSourcePropType } from "react-native";

export type ProductNutrition = {
  calories: string;
  saturatedFat: string;
  sugars: string;
  salt: string;
};

export type NutrientLevel = {
  name: string;
  quantity: string;
  high: boolean;
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  alternativeOf?: string;
  image: ImageSourcePropType;
  score: number;
  carbonKm?: string;
  carbonDetail?: string;
  barcode?: string;
  ingredients?: string;
  allergens?: string;
  nutrition?: ProductNutrition;
  packaging?: string;
  packagingItems?: string[];
  ecoGrade?: string;
  ecoCaption?: string;
  nutriGrade?: string | null;
  nutriCaption?: string;
  nutrientLevels?: NutrientLevel[];
  nova?: 1 | 2 | 3 | 4 | null;
  novaCaption?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Ketchup",
    subtitle: "Heinz Tomato Ketchup",
    alternativeOf: "Kissan Ketchup",
    image: require("../../assets/kissan.png"),
    score: 82,
    carbonKm: "0.5",
    barcode: "0000057086100",
    ingredients: "Tomato concentrate, vinegar, sugar, salt, onion powder, spice extract.",
    allergens: "None declared",
    nutrition: { calories: "112 kcal", saturatedFat: "0.0%", sugars: "22.8%", salt: "1.8 g" },
    packaging: "Glass • Recyclable metal cap",
  },
  {
    id: "2",
    name: "Lipstick",
    subtitle: "L'Oréal Color Riche",
    alternativeOf: "Maybelline Lipstick",
    image: require("../../assets/lipstick.png"),
    score: 68,
    carbonKm: "0.5",
    barcode: "3600523984380",
    ingredients: "Ricinus communis seed oil, beeswax, pigments, tocopherol.",
    allergens: "May contain traces of nut oils",
    nutrition: { calories: "—", saturatedFat: "—", sugars: "—", salt: "—" },
    packaging: "Plastic • Recyclable cardboard sleeve",
  },
  {
    id: "3",
    name: "Perfume",
    subtitle: "Classic Eau de Parfum",
    alternativeOf: "Standard Fragrance",
    image: require("../../assets/perfume.png"),
    score: 74,
    carbonKm: "1.2",
    barcode: "3349668539170",
    ingredients: "Alcohol denat., parfum, aqua, limonene, linalool.",
    allergens: "Limonene, linalool",
    nutrition: { calories: "—", saturatedFat: "—", sugars: "—", salt: "—" },
    packaging: "Glass • Plastic cap • Recyclable carton",
  },
  {
    id: "4",
    name: "Nutella",
    subtitle: "Nutella Hazelnut Spread",
    alternativeOf: "Chocolate Spread",
    image: require("../../assets/nutella.png"),
    score: 61,
    ecoGrade: "C",
    ecoCaption: "Moderate environmental impact",
    carbonKm: "4.0",
    carbonDetail: "787 g CO2 per 100g of product",
    barcode: "8000500179884",
    ingredients:
      "sugar, palm oil, hazelnuts (13%), milk powder (8,7%), cocoa powder with added carcass content (7,4%), emulsifier: lecithin (soy), vanillin",
    allergens: "Milk, Nuts, Soybeans",
    nutrition: { calories: "539 kcal", saturatedFat: "10.6%", sugars: "56.3%", salt: "0.107%" },
    nutriGrade: "E",
    nutriCaption: "Bad nutritional quality",
    nutrientLevels: [
      { name: "Fat", quantity: "30.9%", high: true },
      { name: "Saturated fat", quantity: "10.6%", high: true },
      { name: "Sugars", quantity: "56.3%", high: true },
      { name: "Salt", quantity: "0.107%", high: false },
    ],
    nova: 4,
    novaCaption: "Ultra-processed food and drink products",
    packaging: "Glass • Metal lid • Recyclable",
    packagingItems: ["Plastic", "Metal", "Glass", "Recyclable Metals", "Aluminum Jar", "Lid", "Seal"],
  },
  {
    id: "5",
    name: "Soap",
    subtitle: "Olive Castile Bar",
    alternativeOf: "Bar Soap",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80",
    score: 79,
    carbonKm: "0.8",
    barcode: "0793793112345",
    ingredients: "Saponified olive oil, coconut oil, water, essential oils.",
    allergens: "None declared",
    nutrition: { calories: "—", saturatedFat: "—", sugars: "—", salt: "—" },
    packaging: "Paper wrap • Plastic-free",
  },
  {
    id: "6",
    name: "Oat Milk",
    subtitle: "Oatly Barista Edition",
    alternativeOf: "Dairy Milk",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=400&q=80",
    score: 88,
    carbonKm: "0.4",
    barcode: "7394376615902",
    ingredients: "Oat base (water, oats 10%), rapeseed oil, acidity regulator, calcium, vitamins.",
    allergens: "Oats (gluten)",
    nutrition: { calories: "59 kcal", saturatedFat: "0.3%", sugars: "4.1%", salt: "0.1 g" },
    packaging: "Plant-based carton • Recyclable",
  },
  {
    id: "7",
    name: "Olive Oil",
    subtitle: "Extra Virgin Olive Oil",
    alternativeOf: "Vegetable Oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    score: 84,
    carbonKm: "1.1",
    barcode: "8006040123456",
    ingredients: "100% extra virgin olive oil.",
    allergens: "None declared",
    nutrition: { calories: "824 kcal", saturatedFat: "14.0%", sugars: "0%", salt: "0 g" },
    packaging: "Dark glass • Recyclable metal cap",
  },
  {
    id: "8",
    name: "Coffee",
    subtitle: "Fairtrade Ground Coffee",
    alternativeOf: "Instant Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    score: 77,
    carbonKm: "2.4",
    barcode: "5000128765432",
    ingredients: "100% arabica coffee, roasted and ground.",
    allergens: "None declared",
    nutrition: { calories: "2 kcal", saturatedFat: "0%", sugars: "0%", salt: "0 g" },
    packaging: "Kraft bag • Recyclable valve",
  },
  {
    id: "9",
    name: "Yogurt",
    subtitle: "Greek Natural Yogurt",
    alternativeOf: "Flavoured Yogurt",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
    score: 71,
    carbonKm: "1.6",
    barcode: "5000128123456",
    ingredients: "Pasteurised milk, live yogurt cultures.",
    allergens: "Milk",
    nutrition: { calories: "97 kcal", saturatedFat: "3.2%", sugars: "4.0%", salt: "0.1 g" },
    packaging: "Plastic pot • Recyclable lid",
  },
  {
    id: "10",
    name: "Bread",
    subtitle: "Whole Wheat Loaf",
    alternativeOf: "White Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    score: 86,
    carbonKm: "0.3",
    barcode: "5010024123987",
    ingredients: "Whole wheat flour, water, yeast, salt, sunflower oil.",
    allergens: "Wheat (gluten). May contain sesame",
    nutrition: { calories: "247 kcal", saturatedFat: "0.6%", sugars: "2.8%", salt: "1.0 g" },
    packaging: "Paper bag • Plastic-free",
  },
  {
    id: "11",
    name: "Oats",
    subtitle: "Organic Rolled Oats",
    alternativeOf: "Sugary Cereal",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
    score: 91,
    carbonKm: "0.2",
    barcode: "5099753300123",
    ingredients: "100% organic whole grain oats.",
    allergens: "Oats (gluten). May contain traces of nuts",
    nutrition: { calories: "379 kcal", saturatedFat: "1.3%", sugars: "1.0%", salt: "0 g" },
    packaging: "Cardboard carton • Recyclable",
  },
  {
    id: "12",
    name: "Toothbrush",
    subtitle: "Bamboo Toothbrush",
    alternativeOf: "Plastic Toothbrush",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80",
    score: 93,
    carbonKm: "0.1",
    barcode: "0700383123456",
    ingredients: "Bamboo handle, nylon-4 bristles, plant-based packaging.",
    allergens: "None declared",
    nutrition: { calories: "—", saturatedFat: "—", sugars: "—", salt: "—" },
    packaging: "Cardboard box • Compostable wrap",
  },
];

export function productImageSource(image: ImageSourcePropType): ImageSourcePropType {
  return typeof image === "string" ? { uri: image } : image;
}
