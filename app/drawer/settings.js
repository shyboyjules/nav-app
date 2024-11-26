import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false); // State for toggle
  const [username, setUsername] = useState(''); // State for username input
  const [email, setEmail] = useState(''); // State for email input
  const router = useRouter();

  // Toggle function for enabling/disabling the setting
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Save settings function (this could be expanded to save the data to a database or AsyncStorage)
  const saveSettings = () => {
    alert('Settings saved');
    // You can replace this with actual save logic like saving to local storage or a backend
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save Settings" onPress={saveSettings} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
};

// Styles for the settings UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  settingContainer: {
    width: '100%',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: '100%',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default SettingsScreen;
