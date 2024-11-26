import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Account Information</Text>

     
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>jules123</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>jules@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.info}>09123456789</Text>
      </View>

     
    </View>
  );
};

// Styles
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
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  info: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default Account;
