import { Text, StyleSheet, TextProps } from "react-native";

type Props = Pick<TextProps, "children">;

export const Title = (props: Props) => {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
