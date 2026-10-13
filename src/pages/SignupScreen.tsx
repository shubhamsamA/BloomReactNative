import React from "react";
import { Text, View } from "react-native";
import { AuthBackground } from "../components/AuthBackground";
import { GoogleButton } from "../components/GoogleButton";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { OrDivider } from "../components/OrDivider";
import { PrimaryButton } from "../components/PrimaryButton";

export function SignupScreen({ navigation }: any) {
  return (
    <AuthBackground>
      <Logo />
      <Text
        className="text-center text-[24px] font-inter text-black mb-7 mt-[60px]"
        style={{ fontFamily: "Inter_700Bold", fontWeight: "700" }}
      >
        Create Account
      </Text>
      <View className="gap-[6px]">
        <Input label="Email address" placeholder="you@email.com" icon="email" />
        <Input label="Password" placeholder="••••••••" secure icon="lock" />
      </View>
      <PrimaryButton title="Create account" onPress={() => navigation.replace("Main")} />
      <Text className="text-center mt-4 text-[14px] text-[#404040]">
        Already have an account?{" "}
        <Text onPress={() => navigation.navigate("Login")} className="text-[#295B3F]" style={{ fontFamily: "Inter_700Bold", fontWeight: "700" }}>
          Sign in
        </Text>
      </Text>
      <OrDivider />
      <GoogleButton title="Sign up with Google" onPress={() => navigation.replace("Main")} />
    </AuthBackground>
  );
}
