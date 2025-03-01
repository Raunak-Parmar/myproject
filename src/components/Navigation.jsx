/* eslint-disable no-trailing-spaces */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';  
import Home from './Home';
import ProfileSetupScreen from './Signup';
import LoginScreen from './LoginScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen 
        name="Signup" 
        component={ProfileSetupScreen} 
        options={{ title: 'Signup' }} 
      />
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ title: 'LoginScreen' }} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }} 
      />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;