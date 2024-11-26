import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React from 'react'
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";

const page2 = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Go Back to the home page to see the other Navigations using the back button on the top</Text>
      </View>

     
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          A very Simple stack navigation, nothing too good about the design just a simple UI. 
        </Text>
      </View>
    <View>
    <Button title="Go Back" onPress={() => router.back()} />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonSpacing: {
    height: 10,
  },
});

export default page2