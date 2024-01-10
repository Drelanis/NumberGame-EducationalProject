import { Colors } from "@constants/colors";
import { Text, StyleSheet, TextProps } from "react-native";

type Props = Pick<TextProps, "children" | "style">;

const InstructionText = (props: Props) => {
  const { children, style } = props;
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
