import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";

const Page1 = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Stack navigation</Text>
      </View>

      
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          This is the home page. Navigate using stack to different sections of the app using the buttons below. 
        </Text>
      </View>
      
    <View>
      <Button onPress={() => router.push("page2")}>Go to Page 2</Button>
      
    </View>
    </SafeAreaView>
  );
};

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

export default Page1;
