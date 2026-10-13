import React, { useEffect, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Camera, CameraView } from "expo-camera";
import Svg, { Circle, Path } from "react-native-svg";
import { GlowBlob } from "../components/GlowBlob";
import { Logo } from "../components/Logo";
import { OrDivider } from "../components/OrDivider";
import { PrimaryButton } from "../components/PrimaryButton";
import { Screen } from "../components/Screen";
import { products } from "../data/products";

function SearchIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24">
      <Circle cx="11" cy="11" r="6.5" fill="none" stroke="#717171" strokeWidth="1.8" />
      <Path d="M16 16.5 21 21.5" fill="none" stroke="#717171" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

function ViewfinderCorners() {
  const arm = "w-9 h-9 border-[#111] border-[3px]";
  return (
    <>
      <View className={`absolute top-2 left-2 ${arm} border-r-0 border-b-0`} />
      <View className={`absolute top-2 right-2 ${arm} border-l-0 border-b-0`} />
      <View className={`absolute bottom-2 left-2 ${arm} border-r-0 border-t-0`} />
      <View className={`absolute bottom-2 right-2 ${arm} border-l-0 border-t-0`} />
    </>
  );
}

export function ScanScreen({ navigation }: any) {
  const focused = useIsFocused();
  const [granted, setGranted] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    Camera.getCameraPermissionsAsync().then((status) => {
      if (!cancelled) setGranted(status.granted);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const requestPermission = () => {
    Camera.requestCameraPermissionsAsync().then((status) => setGranted(status.granted));
  };

  const onSearch = () => {
    const match = products.find((product) => product.name.toLowerCase().includes(query.trim().toLowerCase()));
    if (match) {
      navigation.navigate("ProductDetails", { product: match });
    }
  };

  return (
    <Screen className="flex-1 bg-[#F6F8E9] overflow-hidden" safeBottom={false}>
      <GlowBlob className="-top-[80px] -left-24" size={220} />
      <GlowBlob className="-bottom-[40px] -right-[80px]" />
      <View className="flex-1 px-[18px] pt-2">
        <Logo dark horizontal />
        <Text className="text-[24px] text-black text-center mt-6 mb-4" style={{ fontFamily: "Inter_800ExtraBold" }}>
          Scan QR / Barcode
        </Text>

        <View className="w-full aspect-square rounded-[8px] overflow-hidden bg-black self-center max-w-[340px]">
          {granted && focused ? (
            <CameraView
              style={{ flex: 1 }}
              facing="back"
              barcodeScannerSettings={{ barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "qr"] }}
              onBarcodeScanned={
                scanned
                  ? undefined
                  : ({ data }) => {
                      setScanned(true);
                      Alert.alert("Barcode detected", data, [
                        { text: "View product", onPress: () => navigation.navigate("ProductDetails", { product: products[3] }) },
                      ]);
                    }
              }
            />
          ) : granted ? (
            <View className="flex-1 bg-black" />
          ) : (
            <View className="flex-1 items-center justify-center px-6 bg-[#1a1a1a]">
              <Text className="text-white text-center text-[13px] mb-4">Allow camera access to scan a product barcode.</Text>
              <PrimaryButton title="Allow Camera" onPress={requestPermission} />
            </View>
          )}
          <ViewfinderCorners />
          <View className="absolute left-6 right-6 top-1/2 h-[2px] bg-[#B7E4FF]" />
        </View>

        <Text className="text-[13px] text-[#404040] text-center mt-4 px-4 leading-5">
          Place a barcode inside the viewfinder rectangle to scan it.
        </Text>

        {scanned ? <PrimaryButton title="Scan again" onPress={() => setScanned(false)} /> : null}

        <OrDivider />

        <View className="h-[44px] rounded-[12px] bg-[#E8F0C8] px-3.5 flex-row items-center">
          <SearchIcon />
          <TextInput
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={onSearch}
            placeholder="Search your product"
            placeholderTextColor="#8A9380"
            returnKeyType="search"
            className="flex-1 h-full px-2.5 font-inter text-[14px] text-[#141414]"
          />
        </View>
        {query.length > 0 ? (
          <Pressable onPress={onSearch} className="mt-2 self-center">
            <Text className="text-[#295B3E]" style={{ fontFamily: "Inter_600SemiBold" }}>
              Search
            </Text>
          </Pressable>
        ) : null}
      </View>
    </Screen>
  );
}
