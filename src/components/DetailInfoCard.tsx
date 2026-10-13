import React from "react";
import { Text, View, type ViewStyle } from "react-native";

export const DETAIL_CARD: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 14,
  padding: 14,
  marginBottom: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
  overflow: "hidden",
};

export function DetailInfoCard({
  children,
  row = false,
}: {
  children: React.ReactNode;
  row?: boolean;
}) {
  return (
    <View style={[DETAIL_CARD, row ? { flexDirection: "row", alignItems: "center" } : undefined]}>
      {children}
    </View>
  );
}

export function DetailTitle({ children, color = "#111" }: { children: React.ReactNode; color?: string }) {
  return <Text style={{ color, fontSize: 15, fontFamily: "Inter_700Bold" }}>{children}</Text>;
}

export function DetailBody({ children, color = "#111" }: { children: React.ReactNode; color?: string }) {
  return <Text style={{ color, fontSize: 13, lineHeight: 19, marginTop: 4, flexShrink: 1 }}>{children}</Text>;
}
