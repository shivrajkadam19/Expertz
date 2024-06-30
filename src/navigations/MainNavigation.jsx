import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {VehicleScreen,HomeScreen,BookingScreen,ProfileScreen} from '../screens/index'

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vehicle" component={VehicleScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
