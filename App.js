import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
} from 'react-native';
import React, {useState} from 'react';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {StatusBar} from "expo-status-bar";

export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (pikedNumber) => {
    setUserNumber(pikedNumber);
  }

  const setIsGameOverHandler = (countGuess) => {
    setIsGameOver(true);
    setGuessRounds(countGuess)
  }

  const restartGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(false);
    setGuessRounds(0);
  }


  const showScreen = () => {
    if(!userNumber) return <StartGameScreen onPickNumber={pickedNumberHandler}/>
    if(gameIsOver && userNumber) return <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        restartGame={restartGameHandler}
    />
    return <GameScreen
        userNumber={userNumber}
        stopGame={setIsGameOverHandler}
    />
  }

  return (
      <>
        <StatusBar style={'auto'}/>
        <View style={styles.rootScreen}>
        <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode={'cover'}
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {showScreen()}
          </SafeAreaView>
        </ImageBackground>
      </View>
      </>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  background: {
    backgroundColor: colors.accent500,
  },
  backgroundImage: {
    opacity: 0.7
  }
});
