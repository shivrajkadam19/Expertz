import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={MainNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
