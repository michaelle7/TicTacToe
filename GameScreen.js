import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GameScreen({ squares, onSquareClick, winner, onReset }) {
  const currentPlayer = squares.filter(s => s).length % 2 === 0 ? 'X' : 'O';
  const statusMessage = winner ? `${winner} wins!` : `Next player: ${currentPlayer}`;
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Try to get three in a row!</Text>
      <Text style={styles.status}>{statusMessage}</Text>
      <View style={styles.board}>
        {squares.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => onSquareClick(index)}
          >
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.buttonText}>Reset Board</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  instructions: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 20,
    marginBottom: 30,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  cellText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'darkgray',
  },
  resetButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
