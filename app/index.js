import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const MainPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Navigational Examples</Text>
      </View>

     
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Stack Navigator" 
          onPress={() => router.push('page1')} 
          color="#6200EE" 
        />
        <View style={styles.spacing} />
        <Button 
          title="Go to Tabs Navigator" 
          onPress={() => router.push('/tabs/tab1')} 
          color="#03A9F4" 
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    
  },
  spacing: {
    marginVertical: 10,
  },
});

export default MainPage;
