import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import EndScreen from './EndScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const squareClick = (index, navigation) => {
    if (squares[index] || winner) return;
    const updatedSquares = squares.slice();
    updatedSquares[index] = squares.filter(s => s).length % 2 === 0 ? 'X' : 'O';
    setSquares(updatedSquares);

    const theWinner = checkWinner(updatedSquares);
    if (theWinner) {
      setWinner(theWinner);
      navigation.navigate('End', { winner: theWinner });
    } else if (!updatedSquares.includes(null)) {
      setWinner('Tie');
      navigation.navigate('End', { winner: 'Tie' });
    }
  };

  const checkWinner = (squares) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <HomeScreen onStartGame={() => {
              resetGame();
              navigation.navigate('Game');
            }} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Game">
          {({ navigation }) => (
            <GameScreen
              squares={squares}
              onSquareClick={(index) => squareClick(index, navigation)}
              onReset={resetGame}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="End">
          {({ route, navigation }) => (
            <EndScreen
              winner={route.params?.winner}
              onRestart={() => {
                resetGame();
                navigation.navigate('Game');
              }}
              onGoHome={() => {
                resetGame();
                navigation.navigate('Home');
              }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
