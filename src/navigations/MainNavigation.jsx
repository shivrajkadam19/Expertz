import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { VehicleScreen, HomeScreen, BookingScreen, ProfileScreen } from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Contants/Colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light,
          borderTopWidth: 0,
          height: 60,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 10
        },
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.dark,
        tabBarHideOnKeyboard:true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-check-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookkk"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{
          tabBarLabel: 'Vehicle',
          tabBarIcon: ({ color }) => (
            <Icon name="car" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
