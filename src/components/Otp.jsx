import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const logoImg = require('./images/green1.png');
const callImg = require('./images/Call.png');

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {
      let newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move focus to next input field
      if (text !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      // Move focus back on delete
      if (text === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleNext = () => {
    console.log('Entered OTP:', otp.join(''));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={logoImg} style={styles.icon} />
          <Image source={callImg} style={styles.callicon} />
        </View>

        <Text style={styles.title}>Enter OTP</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, { opacity: otp.includes('') ? 0.5 : 1 }]} 
        onPress={handleNext} 
        disabled={otp.includes('')}
      >
        <Text style={styles.buttonText} onPress={() => navigation.navigate('LoginScreen')}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',  
    backgroundColor: '#f4f7f9',
    paddingTop: 50,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  callicon: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    color: '#333',
    marginBottom: 20, 
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: '#333',
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: '#fff',
    fontWeight: '400',
  },
});

export default Otp;