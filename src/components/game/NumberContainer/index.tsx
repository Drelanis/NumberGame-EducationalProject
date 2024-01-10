import { Colors } from "@constants/colors";
import { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const NumberContainer = (props: PropsWithChildren) => {
  const { children } = props;

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const useStyles = () => {
  const deviceWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({
    container: {
      borderWidth: 4,
      borderColor: Colors.accent500,
      padding: deviceWidth < 380 ? 12 : 24,
      margin: deviceWidth < 380 ? 12 : 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    numberText: {
      color: Colors.accent500,
      fontSize: deviceWidth < 380 ? 28 : 36,
      fontFamily: "open-sans-bold",
    },
  });

  return styles;
};
