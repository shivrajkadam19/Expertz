import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import { SplashScreen } from '../screens/index'

const Stack = createNativeStackNavigator();
const HStack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    });
  }, [2000]);

  return (
    <HStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </HStack.Navigator>
  )
}

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
