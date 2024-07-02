import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen,OtpScreen} from '../screens/index'

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
