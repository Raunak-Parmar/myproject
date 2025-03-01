import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LanguageSelectionScreen from './src/components/LanguageSelectionScreen';
import LoginScreen from './src/components/LoginScreen';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import LoadingScreen from './src/components/LoadingScreen';
import Number from './src/components/Number';
import Otp from './src/components/Otp';
import { MarketPlace } from './src/components/MarketPlace';
import ProductScreen from './src/components/ProductScreen';
import ProfileScreen from './src/components/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoadingScreen"
        screenOptions={{ headerShown: false }} // Hides the header for all screens
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="ProfileSetupScreen" component={Signup} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="OTP" component={Otp} />
        <Stack.Screen name="MarketPlace" component={MarketPlace} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;