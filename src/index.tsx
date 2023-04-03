import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import PanelScreen from './screens/panel';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Panel" component={PanelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;