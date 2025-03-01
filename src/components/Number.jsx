import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const logoImg = require('./images/green1.png');
const callImg = require('./images/call_image.png');

const Number = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    // Remove non-numeric characters & limit to 10 digits
    const sanitizedText = text.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(sanitizedText);
  };

  const handleNext = () => {
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      {/* Wrapper to align content at start center */}
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={logoImg} style={styles.icon} />
          <Image source={callImg} style={styles.callicon} />
        </View>

        <Text style={styles.title}>Enter Number</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>(+91)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="numeric"
            maxLength={10} // Ensures no more than 10 digits can be entered
          />
        </View>
      </View>

      {/* "Next" button stays at the bottom */}
      <TouchableOpacity style={styles.button} onPress={handleNext} disabled={phoneNumber.length !== 10}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('OTP')}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',  // Centers horizontally
    backgroundColor: '#f4f7f9',
    paddingTop: 50,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center', // Aligns content to the center horizontally
    justifyContent: 'flex-start', // Ensures content starts from the top
    marginTop: 80, // Moves content down a bit
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
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  prefix: {
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    position: 'absolute',
    bottom: 40, // Keeps it at the bottom
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

export default Number;