import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import axios from 'axios';
import Title from '../../components/Title';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleSendOTP = async () => {
    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    try {
      // Replace with your backend API URL
      const response = await axios.post('http://expertz.softtronix.co.in/api/v1/auth/sendotp', {
        phoneNo: `+91${mobile}`,
      });
      console.log(response.data);
      // alert('OTP sent successfully');
      navigation.navigate('OtpScreen', { phoneNo: mobile });
    } catch (error) {
      console.error(error);
      alert('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Title variant={"displayMedium"} >
          Login
        </Title>
        <Title variant={"labelLarge"}>Enter your mobile number to continue</Title>
      </View>

      <View style={{ ...styles.inputContainer }}>
        <Title variant={"titleLarge"} style={{ borderColor: 'black', borderRightWidth: 1, padding: 6 }}>
          +91
        </Title>
        <TextInput
          label="Mobile"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.input}
          autoFocus={true}
          placeholder='Ex. 1234567890'
        />
      </View>
      <Text style={{color:'red'}}>{error}</Text>
      <Text style={styles.label}>{mobile.length}/10</Text>
      <Button
        mode="contained"
        onPress={handleSendOTP}
        loading={loading}
        disabled={loading}
        style={
          {
            ...styles.button,
            backgroundColor: mobile.length === 10 ? 'green' : 'grey',
          }
        }
      >
        Send OTP
      </Button>
      <Text style={styles.disclaimer}>
        You will receive a 4 digit code on this number
      </Text>
      <Title style={styles.terms} variant={"labelSmall"}>
        By continuing you agree to our Terms of Service and Privacy Policy Copyright {'\u00a9'} Expertz
      </Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical:50,
    justifyContent: 'flex-start',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'ceter',
    marginTop: 70,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 5
  },
  input: {
    // backgroundColor:'green',
    width: 250,
    color: 'black',
    fontSize: 20,
    paddingHorizontal:20,
  },
  button: {
    marginBottom: 20,
  },
  disclaimer: {
    textAlign: 'center',
    marginBottom: 10,
  },
  terms: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center'
  },
  label: {
    alignSelf: 'flex-end',
    marginRight: 15,
    paddingVertical: 10,
    color: 'grey'
  }
});

export default LoginScreen;
