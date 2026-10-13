import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { GlowBlob } from "../components/GlowBlob";
import { Logo } from "../components/Logo";
import { Screen } from "../components/Screen";
import { BadgesSection, ProfileStatsSection } from "../sections/ProfileSections";

function LogoutIcon() {
  return (
    <Svg width="18" height="16" viewBox="0 0 18 16" fill="none" >
    <Path d="M13.125 3.5L11.8913 4.73375L14.1488 7H5.25V8.75H14.1488L11.8913 11.0075L13.125 12.25L17.5 7.875L13.125 3.5ZM1.75 1.75H8.75V0H1.75C0.7875 0 0 0.7875 0 1.75V14C0 14.9625 0.7875 15.75 1.75 15.75H8.75V14H1.75V1.75Z" fill="black"/>
    </Svg>
    
  );
}

function TrashIcon() {
  return (
    <Svg width={13} height={16} viewBox="0 0 13 16">
      <Path
        d="M0.875 14C0.875 14.9625 1.6625 15.75 2.625 15.75H9.625C10.5875 15.75 11.375 14.9625 11.375 14V3.5H0.875V14ZM3.0275 7.77L4.26125 6.53625L6.125 8.39125L7.98 6.53625L9.21375 7.77L7.35875 9.625L9.21375 11.48L7.98 12.7138L6.125 10.8587L4.27 12.7138L3.03625 11.48L4.89125 9.625L3.0275 7.77ZM9.1875 0.875L8.3125 0H3.9375L3.0625 0.875H0V2.625H12.25V0.875H9.1875Z"
        fill="black"
      />
    </Svg>
  );
}

export function ProfileScreen({ navigation }: any) {
  const handleLogout = () => {
    let root = navigation;
    while (root.getParent?.()) {
      root = root.getParent();
    }
    root.reset({
      index: 0,
      routes: [
        {
          name: "Auth",
          state: {
            index: 0,
            routes: [{ name: "Login" }],
          },
        },
      ],
    });
  };

  return (
    <Screen className="flex-1 bg-[#F6F8E9] overflow-hidden" safeBottom={false}>
      <GlowBlob className="-top-[80px] -left-24" size={220} />
      <GlowBlob className="-bottom-[40px] -right-[80px]" />
      <ScrollView contentContainerClassName="px-[18px] pt-2 pb-10" showsVerticalScrollIndicator={false}>
        <Logo dark horizontal />
        <Text className="text-[24px] text-black pt-9 pb-2 font-inter font-bold leading-[100%] tracking-normal" style={{ fontWeight: "700" }}>
          Profile
        </Text>
        <Text className="text-[15px] text-[#295B3E] mt-1 font-inter font-semibold leading-[100%] tracking-normal" style={{ fontWeight: "600" }}>
          Tracker Profile
        </Text>
        <ProfileStatsSection />
        <BadgesSection />
        <View className="mt-8 -mx-[18px]">
          <View className="h-px bg-[#DCDCDC]" />
          <Pressable onPress={handleLogout} className="flex-row items-center gap-3.5 px-[18px] h-[52px]">
            <LogoutIcon />
            <Text className="text-[16px] text-black font-inter font-normal leading-[100%] tracking-normal" style={{ fontWeight: "400" }}>
              Log out
            </Text>
          </Pressable>
          <View className="h-px bg-[#DCDCDC]" />
          <Pressable className="flex-row items-center gap-3.5 px-[18px] h-[52px]">
            <TrashIcon />
            <Text className="text-[16px] text-black font-inter font-normal leading-[100%] tracking-normal" style={{ fontWeight: "400" }}>
              Delete Account
            </Text>
          </Pressable>
          <View className="h-px bg-[#DCDCDC]" />
        </View>
      </ScrollView>
    </Screen>
  );
}
