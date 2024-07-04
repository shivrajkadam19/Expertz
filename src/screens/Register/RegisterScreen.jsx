import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import Title from '../../components/Title';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title variant={"displayMedium"}>
        Welcome
      </Title>
      <Text style={styles.subtitle}>Welcome to Expertz, please register to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Email (Optional)"
      />
      <Button
        onPress={() => navigation.replace('Home')}
        style={styles.completeButton}
        contentStyle={styles.contentStyle}
        textColor='white'
      >
        Complete
      </Button>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>By continuing you agree to our Terms of Service and Privacy Policy</Text>
        <Text style={styles.copyright}>Copyright © 2023 Expertz.</Text>
      </View>
    </View>
  );
}

export default RegisterScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    paddingVertical:50,
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20
  },
  buttonContent: {
    height: 45,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  footer: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 20,
    textAlign:'center'
  },
  copyright: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 5,
    textAlign:'center'
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf:'center'
  }
});
