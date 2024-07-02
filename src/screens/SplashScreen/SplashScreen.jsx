import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Easing } from 'react-native';
import Title from '../../components/Title';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Increased duration for smoother animation
        easing: Easing.inOut(Easing.ease), // Easing function for smooth transition
        useNativeDriver: true,
      }
    );
    
    const fadeOut = Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 1000, // 1 second
        useNativeDriver: true,
      }
    );

    const redirectToLogin = () => navigation.navigate('Home');

    Animated.sequence([
      fadeOut,
      Animated.delay(500), // Delay for smoother transition
      fadeIn,
    ]).start(() => {
      setTimeout(redirectToLogin, 2000); // Reduced timeout after animation to balance total time
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        {/* <Image source={require('../assets/image/logo.png')} style={styles.logo} /> */}
        <Title variant={"displayLarge"}>
          Expertz
        </Title>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: Set a background color
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300, // Adjusted width to fit the image properly
    height: 200, // Adjusted height to fit the image properly
  },
});

export default SplashScreen;

