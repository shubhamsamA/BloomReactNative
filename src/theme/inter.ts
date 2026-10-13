import { Text, TextInput, type TextStyle } from "react-native";

const interRegular: TextStyle = { fontFamily: "Inter_400Regular" };

const TextComponent = Text as typeof Text & { defaultProps?: { style?: TextStyle | TextStyle[] } };
const TextInputComponent = TextInput as typeof TextInput & { defaultProps?: { style?: TextStyle | TextStyle[] } };

TextComponent.defaultProps = {
  ...TextComponent.defaultProps,
  style: [interRegular, TextComponent.defaultProps?.style].filter(Boolean) as TextStyle[],
};

TextInputComponent.defaultProps = {
  ...TextInputComponent.defaultProps,
  style: [interRegular, TextInputComponent.defaultProps?.style].filter(Boolean) as TextStyle[],
};
