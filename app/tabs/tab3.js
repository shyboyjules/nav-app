import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Tab3 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>U Found the drawer Navigator</Text>
      
      
      

     
      <View style={styles.navButtonContainer}>
        <Button 
          title="Go to Drawer Navigator" 
          onPress={() => router.push('/drawer/home')} 
          color="#6200EE" 
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
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  
  navButtonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default Tab3;
