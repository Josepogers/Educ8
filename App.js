import React from 'react';
import { View, Text } from 'react-native';
import Home from './src/screens/home/Home.js'
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

export function App() {
  return (
    <>
      <StatusBar
        style='light'
      />
      <Home />
    </>
  );
}
registerRootComponent(App)