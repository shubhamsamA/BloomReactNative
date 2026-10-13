import React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const GRADE_COLORS: Record<string, string> = {
  A: "#038141",
  B: "#85BB2F",
  C: "#F5C518",
  D: "#EE8100",
  E: "#E63E11",
};

const NUTRI = GRADE_COLORS;

const NOVA: Record<number, string> = {
  1: "#00A05B",
  2: "#F5C518",
  3: "#EE8100",
  4: "#E63E11",
};

const LEAF =
  "M20 2.5C12.2 4.2 6.2 10.4 5.4 18.6c-.4 4.2 1.4 8.2 5 10.6 1.4.9 3.1 1.3 4.8 1.3 7.6 0 14.2-6.8 15.2-15.6C31.8 7.2 26.8 3.2 20 2.5Z";

export function EcoScoreMark({ letter }: { letter: string }) {
  const grades = ["A", "B", "C", "D", "E"];

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#F5C518",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 7,
      }}
    >
      <View style={{ width: 38, height: 42, alignItems: "center", justifyContent: "center" }}>
        <Svg width={38} height={42} viewBox="0 0 36 34">
          <Path d={LEAF} fill="#F5C518" />
        </Svg>
        <Text
          style={{
            position: "absolute",
            color: "#fff",
            fontSize: 16,
            fontFamily: "Inter_800ExtraBold",
          }}
        >
          {letter}
        </Text>
      </View>
      <View style={{ marginLeft: 6, alignItems: "center" }}>
        <Text style={{ fontSize: 12, color: "#111", fontFamily: "Inter_700Bold", lineHeight: 14 }}>eco</Text>
        <View style={{ flexDirection: "row", alignItems: "center", height: 16, marginVertical: 2 }}>
          {grades.map((grade) => {
            const active = grade === letter;
            return (
              <View
                key={grade}
                style={{
                  width: 9,
                  height: 16,
                  marginHorizontal: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 8,
                    height: active ? 14 : 7,
                    borderRadius: 4,
                    backgroundColor: GRADE_COLORS[grade],
                  }}
                />
              </View>
            );
          })}
        </View>
        <Text style={{ fontSize: 12, color: "#111", fontFamily: "Inter_700Bold", lineHeight: 14 }}>score</Text>
      </View>
    </View>
  );
}

function ScoreCell({
  active,
  color,
  label,
}: {
  active: boolean;
  color: string;
  label: string | number;
}) {
  return (
    <View
      style={{
        width: active ? 36 : 22,
        height: 40,
        marginRight: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: active ? 36 : 20,
          height: active ? 36 : 22,
          borderRadius: active ? 8 : 4,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontFamily: "Inter_700Bold", fontSize: active ? 16 : 10 }}>{label}</Text>
      </View>
    </View>
  );
}

export function NutriScoreBar({ grade }: { grade: string }) {
  const letters = ["A", "B", "C", "D", "E"];
  return (
    <View className="flex-row items-center">
      {letters.map((letter) => (
        <ScoreCell key={letter} active={letter === grade} color={NUTRI[letter]} label={letter} />
      ))}
    </View>
  );
}

export function NovaScoreBar({ value }: { value: 1 | 2 | 3 | 4 }) {
  const nums = [1, 2, 3, 4] as const;
  return (
    <View className="flex-row items-center">
      {nums.map((n) => (
        <ScoreCell key={n} active={n === value} color={NOVA[n]} label={n} />
      ))}
    </View>
  );
}
