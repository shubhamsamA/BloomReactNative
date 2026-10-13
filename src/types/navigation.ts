import type { NavigatorScreenParams } from "@react-navigation/native";
import type { Product } from "../data/products";

export type ProductDetailsParams = { product?: Product };

export type RootStackParamList = {
  Auth: { screen?: keyof AuthStackParamList } | undefined;
  Main: NavigatorScreenParams<TabParamList> | undefined;
};

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  History: undefined;
  ProductDetails: ProductDetailsParams;
};

export type ScanStackParamList = {
  ScanMain: undefined;
  ProductDetails: ProductDetailsParams;
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList> | undefined;
  Scan: NavigatorScreenParams<ScanStackParamList> | undefined;
  Profile: undefined;
};
