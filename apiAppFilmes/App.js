import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import filmes from './src/pages/filmes/index.js';
import detalhes from './src/pages/detalhes/index.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <StatusBar backgroundColor="#0be881" />
      <Stack.Navigator>
        <Stack.Screen name="Filmes" options={{headerShown: false}}  component={filmes} />
        <Stack.Screen name="Detalhes" options={{headerShown: false}}  component={detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


