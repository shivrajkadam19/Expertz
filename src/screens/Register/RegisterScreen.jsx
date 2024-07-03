import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const RegisterScreen = ({navigation}) =>{
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.subtitle}>Welcome to Hozzo, please register to continue</Text>
        <TextInput 
          style={styles.input}
          placeholder="Your name"
        />
        <TextInput 
          style={styles.input}
          placeholder="Email (Optional)"
        />
        <Button 
          title="Complete"
          onPress={()=>navigation.replace('Home')}
          color="#8BC34A"
        />
        <Text style={styles.footer}>By continuing you agree to our Terms of Service and Privacy Policy</Text>
        <Text style={styles.copyright}>Copyright © 2023 Hozzo.</Text>
      </View>
    </PaperProvider>
  );
}

export default RegisterScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3EDF7'
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#8BC34A',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  footer: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 20
  },
  copyright: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 5
  }
});
