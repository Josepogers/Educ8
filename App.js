import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

//screens
import Home from './src/screens/home/Home.js'
import { Login } from './src/screens/login/Login.js';
import { Portugues } from './src/screens/disciplinas/portugues/Portugues..js';
import { Matematica } from './src/screens/disciplinas/matematica/Matematica.js';
import { Fisica } from './src/screens/disciplinas/fisica/Fisica.js';
import { Quimica } from './src/screens/disciplinas/quimica/Quimica.js';
import { Historia } from './src/screens/disciplinas/historia/Historia.js';
import { Biologia } from './src/screens/disciplinas/biologia/Biologia.js';
import { Ingles } from './src/screens/disciplinas/ingles/Ingles.js';
import { Redacao } from './src/screens/disciplinas/redacao/Redacao.js';
import { Geografia } from './src/screens/disciplinas/geografia/Geografia.js';


export function App() {
  return (
    <>
      <StatusBar
        style='light'
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Matematica' component={Matematica} options={{ headerShown: false }} />
          <Stack.Screen name='Portugues' component={Portugues} options={{ headerShown: false }} />
          <Stack.Screen name='Fisica' component={Fisica} options={{ headerShown: false }} />
          <Stack.Screen name='Quimica' component={Quimica} options={{ headerShown: false }} />
          <Stack.Screen name='Biologia' component={Biologia} options={{ headerShown: false }} />
          <Stack.Screen name='Redacao' component={Redacao} options={{ headerShown: false }} />
          <Stack.Screen name='Geografia' component={Geografia} options={{ headerShown: false }} />
          <Stack.Screen name='Historia' component={Historia} options={{ headerShown: false }} />
          <Stack.Screen name='Ingles' component={Ingles} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
registerRootComponent(App)