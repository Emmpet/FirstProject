import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Movies from './pages/Movies';
import AboutUs from './pages/AboutUs';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hem" component={Home} />
        <Stack.Screen name="Filmer" component={Movies} />
        <Stack.Screen name="Om oss" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


