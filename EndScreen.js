import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EndScreen({ winner, onRestart, onGoHome }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {winner === 'Tie' ? 'It\'s a Tie!' : `${winner} wins!`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onRestart}>
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onGoHome}>
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
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
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal: 10, 
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
