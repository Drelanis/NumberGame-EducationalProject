import { View, StyleSheet, FlatList } from "react-native";
import { GuessLogItem } from "@components/game";
import { Title } from "@components/ui";
import { useLogic } from "./useLogic";
import { ScreenContent } from "./components";

type Props = {
  userNumber: number;
  onGameOver: (rounds: number) => void;
};

export const GameScreen = (props: Props) => {
  const { userNumber, onGameOver } = props;

  const { guessRounds, currentGuess, nextGuessHandler } = useLogic({
    userNumber,
    onGameOver,
  });

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <ScreenContent
        nextGuessHandler={nextGuessHandler}
        currentGuess={currentGuess}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guessNumber={itemData.item}
            />
          )}
          keyExtractor={(item) => `${item}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
