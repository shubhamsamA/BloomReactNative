import React from "react";
import { Text, View } from "react-native";
import { NewRecordBadge, StreakBadge } from "../components/Badge";

function ProfileMetric({ value, label }: { value: string; label: string }) {
  return (
    <View className="flex-1 bg-[#E4EED4] rounded-[10px] py-4 px-3 items-center justify-center h-[98px] w-[174px]">
      <Text className="text-[28px] text-[#295B3E]" style={{ fontFamily: "Inter_800ExtraBold" }}>
        {value}
      </Text>
      <Text className="text-[14px] text-[#484842] text-center mt-1 leading-[16px]" style={{ fontFamily: "Inter_500Medium" }}>
        {label}
      </Text>
    </View>
  );
}

export function ProfileStatsSection() {
  return (
    <View className="flex-row gap-2.5 mt-6">
      <ProfileMetric value="10%" label={"Impact on\nEnvironment"} />
      <ProfileMetric value="8/10" label={"Sustainability\nScore"} />
    </View>
  );
}

export function BadgesSection() {
  return (
    <>
      <Text className="text-[18px] text-[#295B3E] my-4 font-inter font-semibold" style={{ fontWeight: "600" }}>
        Badges Unlocked
      </Text>
      <View className="flex-row gap-2.5">
        <NewRecordBadge />
        <StreakBadge />
      </View>
    </>
  );
}
