import { PrimaryButton } from "@components/ui";
import { StyleSheet, View } from "react-native";

type Props = {
  resetInputHandler: () => void;
  confirmInputHandler: () => void;
};

export const ButtonsContainer = (props: Props) => {
  const { resetInputHandler, confirmInputHandler } = props;

  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
