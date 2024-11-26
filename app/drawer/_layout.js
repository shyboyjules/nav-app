import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerActiveBackgroundColor: 'gray', 
            drawerActiveTintColor: 'white', 
            drawerInactiveTintColor: '#555',
          }}
        />
        <Drawer.Screen
          name="account" 
          options={{
            drawerLabel: 'Account',
            title: 'Account',
            drawerActiveBackgroundColor: 'gray', 
            drawerActiveTintColor: 'white', 
            drawerInactiveTintColor: '#555',
          }}
        />
        <Drawer.Screen
          name="settings" 
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerActiveBackgroundColor: 'gray', 
            drawerActiveTintColor: 'white', 
            drawerInactiveTintColor: '#555',
          }}
        />

        
      </Drawer>
    </GestureHandlerRootView>
  );
}
