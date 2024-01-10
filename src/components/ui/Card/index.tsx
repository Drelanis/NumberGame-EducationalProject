import { Colors } from "@constants/colors";
import { PropsWithChildren } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export const Card = (props: PropsWithChildren) => {
  const { children } = props;

  const styles = useStyles();

  return <View style={styles.card}>{children}</View>;
};

const useStyles = () => {
  const deviceWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({
    card: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: deviceWidth < 380 ? 18 : 36,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: Colors.primary800,
      borderRadius: 8,
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
  });

  return styles;
};
