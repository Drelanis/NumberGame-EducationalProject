import { TextInput, StyleSheet } from "react-native";

import { Card, InstructionText } from "@components/ui";
import { Colors } from "@constants/colors";
import { ButtonsContainer } from "../ButtonsContainer";

type Props = {
  enteredNumber: string;
  numberInputHandler: (enteredText: string) => void;
  resetInputHandler: () => void;
  confirmInputHandler: () => void;
};

export const CardScreen = (props: Props) => {
  const { enteredNumber, numberInputHandler, ...restProps } = props;

  return (
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <ButtonsContainer {...restProps} />
    </Card>
  );
};

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
