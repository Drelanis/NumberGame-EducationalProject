import { Colors } from "@constants/colors";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";

export const ScreenImage = () => {
  const styles = useStyles();

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("@assets/images/success.png")}
      />
    </View>
  );
};

const useStyles = () => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const styles = StyleSheet.create({
    imageContainer: {
      borderWidth: 3,
      borderColor: Colors.primary800,
      overflow: "hidden",
      marginTop: 36,
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2,
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });

  return styles;
};
