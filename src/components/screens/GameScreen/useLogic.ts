import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { generateRandomBetween } from "./utils";
import { DirectionType } from "./types";
import { Direction } from "./constants";

type Params = {
  userNumber: number;
  onGameOver: (rounds: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

export const useLogic = (params: Params) => {
  const { userNumber, onGameOver } = params;

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction: DirectionType) => {
    if (
      (direction === Direction.LOWER && currentGuess < userNumber) ||
      (direction === Direction.GREATER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === Direction.LOWER) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return {
    guessRounds,
    currentGuess,
    nextGuessHandler,
  };
};
