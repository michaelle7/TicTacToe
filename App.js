import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen'; 
import GameScreen from './GameScreen'; 
import EndScreen from './EndScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const squareClick = (index) => {
    if (squares[index] || winner) return; // this is to prevent the user from adding more x or o's when a person win but this line of code is not needed since it's going to the end game screen
    const updatedSquares = squares.slice();
    updatedSquares[index] = squares.filter(s => s).length % 2 === 0 ? 'X' : 'O';
    setSquares(updatedSquares);
    
    const theWinner = checkWinner(updatedSquares);
    if (theWinner) {
      endScreen(theWinner); // go to end screen if someone wins
    } else if (!updatedSquares.includes(null)){
        endScreen("Tie") // go to end screen if it's a tie
    }
  };

  const checkWinner = (squares) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], //winning combinations on the tic tac toe grid
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const startNewGame = () => { 
    setSquares(Array(9).fill(null));
    setWinner(null);
    setScreen('game');
  };

  const resetBoard = () => { //restart board. copied the startnewgame LMAO
    setSquares(Array(9).fill(null));
    setWinner(null);
  }

  const endScreen = (result) => { // start new game in end screen
    setWinner(result);
    setScreen('end');
  };

  const goToHome = () => { // go to home page in end screen
    setScreen('home');
  };

  if (screen === 'home') {
    return <HomeScreen onStartGame={startNewGame} />;
  }

  if (screen === 'game') {
    return <GameScreen squares={squares} onSquareClick={squareClick} winner={winner} onReset={resetBoard}/>;// added onReset so that the board would reset
  }

  if (screen === 'end') { // same thing as home and game
    return <EndScreen winner={winner} onRestart={startNewGame} onGoHome={goToHome} />;
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});
