import { PrimaryButton, Title } from "@components/ui";
import { Colors } from "@constants/colors";
import { View, ScrollView, StyleSheet } from "react-native";
import { GameOverScreenProps } from "./types";
import { ScreenImage, SummaryText } from "./components";

export const GameOverScreen = (props: GameOverScreenProps) => {
  const { roundsNumber, userNumber, onStartNewGame } = props;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <ScreenImage />
        <SummaryText roundsNumber={roundsNumber} userNumber={userNumber} />
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
