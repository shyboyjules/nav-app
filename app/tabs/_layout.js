import React from "react";
import { Tabs } from "expo-router";

export default function Dashboard() {
  return (
    <Tabs>
      <Tabs.Screen name="tab1" options={{ title: "Home" }} />
      <Tabs.Screen name="tab2" options={{ title: "Account" }} />
      <Tabs.Screen name="tab3" options={{ title: "Setting" }} />
    </Tabs>
  );
}
