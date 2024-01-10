import { Colors } from "@constants/colors";
import { Text, StyleSheet } from "react-native";
import { GameOverScreenProps } from "../types";

type Props = Pick<GameOverScreenProps, "roundsNumber" | "userNumber">;

export const SummaryText = (props: Props) => {
  const { roundsNumber, userNumber } = props;

  return (
    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
      rounds to guess the number{" "}
      <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>
  );
};

const styles = StyleSheet.create({
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
