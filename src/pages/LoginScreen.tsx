import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { AuthBackground } from "../components/AuthBackground";
import { GoogleButton } from "../components/GoogleButton";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { OrDivider } from "../components/OrDivider";
import { PrimaryButton } from "../components/PrimaryButton";

export function LoginScreen({ navigation }: any) {
  return (
    <AuthBackground>
      <Logo />
      <Text className="text-center text-[28px] font-inter font-bold text-black mb-7 mt-[60px]" style={{ fontWeight: "700" }}>Welcome Back!</Text>
      <View className="gap-[6px]">
        <Input label="Email address" placeholder="you@email.com" icon="email" />
        <Input label="Password" placeholder="••••••••" secure icon="lock" />
      </View>
      <PrimaryButton title="Login" onPress={() => navigation.replace("Main")} />
      <Text className="text-center mt-4 text-[14px] text-[#404040]">
        New to Bloom?{" "}
        <Text onPress={() => navigation.navigate("Signup")} className="text-[#295B3F] font-bold" style={{ fontWeight: "700" }}>
          Create account
        </Text>
      </Text>
      <Pressable onPress={() => Alert.alert("Forgot password", "Password reset will be available soon.")}>
      <Text className="mt-2.5 text-center text-[12px] font-semibold font-inter leading-[100%] tracking-normal text-[#404040]" style={{ fontWeight: "600" }}>
  Forgot password?
</Text>
      </Pressable>
      <OrDivider />
      <GoogleButton title="Sign up with Google" onPress={() => navigation.replace("Main")} />
    </AuthBackground>
  );
}
