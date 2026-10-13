import React, { useId } from "react";
import { View } from "react-native";
import Svg, { Circle, Defs, FeGaussianBlur, Filter } from "react-native-svg";

type GlowBlobProps = {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  className?: string;
};

export function GlowBlob({
  size = 240,
  color = "#909E47",
  opacity = 0.6,
  blur = 60,
  className,
}: GlowBlobProps) {
  const filterId = useId().replace(/:/g, "");
  const pad = blur;
  const svgSize = size + pad * 2;
  const radius = size / 2;
  const center = pad + radius;

  return (
    <View className={`absolute ${className ?? ""}`} pointerEvents="none" style={{ width: svgSize, height: svgSize, marginLeft: -pad, marginTop: -pad }}>
      <Svg width={svgSize} height={svgSize}>
        <Defs>
          <Filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <FeGaussianBlur in="SourceGraphic" stdDeviation={blur / 2} />
          </Filter>
        </Defs>
        <Circle cx={center} cy={center} r={radius} fill={color} opacity={opacity} filter={`url(#${filterId})`} />
      </Svg>
    </View>
  );
}
