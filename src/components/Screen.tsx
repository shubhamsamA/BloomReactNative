import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({
  children,
  className,
  safeBottom = true,
}: {
  children: React.ReactNode;
  className?: string;
  safeBottom?: boolean;
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={className}
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: safeBottom ? insets.bottom : 0 }}
    >
      {children}
    </View>
  );
}
