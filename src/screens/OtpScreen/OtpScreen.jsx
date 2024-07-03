import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button, ActivityIndicator, HelperText } from 'react-native-paper';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [isLoading, setIsLoading] = useState(false);

  const textInputs = Array(4).fill(null).map(() => useRef(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleResendOTP = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTimer(120);
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      textInputs[index + 1].current.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      textInputs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.instruction}>
        Enter 4 digit OTP sent to your mobile number 7721031161
      </Text>
      <View style={styles.otpContainer}>
        {Array(4).fill('').map((_, index) => (
          <TextInput
            key={index}
            ref={textInputs[index]}
            style={styles.otpInput}
            value={otp[index]}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            mode="outlined"
            theme={{ colors: { primary: '#4CAF50', underlineColor: 'transparent' } }}
          />
        ))}
      </View>
      <HelperText type="info" style={styles.resendText}>
        Resend OTP in: {timer} seconds
      </HelperText>
      {isLoading && <ActivityIndicator animating={true} color="#4CAF50" />}
      <Button
        mode="contained"
        // onPress={handleResendOTP}
        onPress={() => navigation.navigate('Register')}
        // disabled={timer > 0 || isLoading}
        style={styles.resendButton}
        contentStyle={styles.buttonContent}
      >
        Resend OTP
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  instruction: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  otpInput: {
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#4CAF50',
    backgroundColor: '#FFFFFF',
  },
  resendText: {
    marginBottom: 20,
    color: '#333',
  },
  resendButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
  },
  buttonContent: {
    height: 45,
  },
});

export default OtpScreen;