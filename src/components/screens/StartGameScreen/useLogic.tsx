import { useState } from "react";
import { Alert } from "react-native";
import { StartGameScreenProps } from "./types";

type Params = Pick<StartGameScreenProps, "onPickNumber">;

export const useLogic = (params: Params) => {
  const { onPickNumber } = params;

  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return {
    numberInputHandler,
    enteredNumber,
    resetInputHandler,
    confirmInputHandler,
  };
};
