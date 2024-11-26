import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Tab Navigator</Text>
      <Text style={styles.description}>Here i have created a simple design with functioning navigations.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Tab1;
