import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Button, Title, Paragraph, IconButton } from 'react-native-paper';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Booking" />
      </Appbar.Header>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#8BC34A', // Match the green color
  },
});

export default BookingScreen
