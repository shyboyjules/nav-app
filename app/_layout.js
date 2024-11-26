import React from 'react';
import { Stack } from 'expo-router';


const RootLayout = () => {
  return (
    <Stack>
      
      <Stack.Screen name="index"
          options={{
          title: "HOME", headerShown: false,
        }}/>
      <Stack.Screen name="page1" options={{ title: "Stack 1" }}/>
      <Stack.Screen name="page2" options={{ title: "Stack 2" }}/>
    
    </Stack>

    
  );
};

export default RootLayout;
