import { Title } from "@components/ui";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StartGameScreenProps } from "./types";
import { useLogic } from "./useLogic";
import { CardScreen } from "./components";

export const StartGameScreen = (props: StartGameScreenProps) => {
  const { onPickNumber } = props;

  const params = useLogic({ onPickNumber });

  const styles = useStyles();

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <CardScreen {...params} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const useStyles = () => {
  const { height } = useWindowDimensions();

  const marginTopDistance = height < 380 ? 30 : 100;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      alignItems: "center",
      marginTop: marginTopDistance,
    },
  });

  return styles;
};
