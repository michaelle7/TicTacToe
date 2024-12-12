import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ onStartGame }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={onStartGame}
      >
        <Text style={styles.buttonText}>Start New Game</Text>
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
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});
