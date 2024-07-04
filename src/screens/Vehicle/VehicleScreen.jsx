import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Button, Title, Paragraph, IconButton } from 'react-native-paper';

const VehiclesScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Vehicles" subtitle="Your saved vehicles" />
        <IconButton icon="plus" onPress={() => { /* Add vehicle action */ }} />
      </Appbar.Header>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/000000/car--v2.png' }}
          style={styles.image}
        />
        <Title>Add your first vehicle</Title>
        <Paragraph style={styles.paragraph}>
          You haven't added any vehicle yet, add your first vehicle now. It's easy and fast.
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => { /* Add vehicle action */ }}
          style={styles.button}
        >
          Add Vehicle
        </Button>
      </View>
    </View>
  );
};

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

export default VehiclesScreen;
