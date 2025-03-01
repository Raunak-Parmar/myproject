import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const mainImg = require('./images/green.png');

const ProfileSetupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, [])
  );

  const validatePassword = (text) => {
    setPassword(text);
  };

  const passwordConditions = [
    { text: 'At least 1 Capital and 1 Small letter', regex: /(?=.*[a-z])(?=.*[A-Z])/ },
    { text: 'At least 1 Special Character', regex: /(?=.*[@$!%*?&])/ },
    { text: 'At least 1 Number', regex: /(?=.*\d)/ },
    { text: 'Minimum 8 characters', regex: /.{8,}/ },
  ];

  const checkPasswordStrength = () => {
    return passwordConditions.every((condition) => condition.regex.test(password));
  };

  const sendCred = () => {
    if (!name) {
      Alert.alert('Error', 'Username is required.');
      return;
    }
    if (!email) {
      Alert.alert('Error', 'Email is required.');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is required.');
      return;
    }
    if (!confirmPassword) {
      Alert.alert('Error', 'Please confirm your password.');
      return;
    }
    if (!checkPasswordStrength()) {
      Alert.alert('Error', 'Password does not meet all conditions.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    fetch('http://10.0.2.2:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={mainImg} style={styles.icon} />
      <Text style={styles.title}>Profile Set up</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Username" value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} keyboardType="email-address" onChangeText={setEmail} />

      <Text style={styles.label}>Set Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Set Password"
        value={password}
        secureTextEntry={true}
        onChangeText={validatePassword}
      />

      <View style={styles.passwordRequirements}>
        {passwordConditions.map((condition, index) => {
          const isMet = condition.regex.test(password);
          return (
            <Text key={index} style={[styles.requirement, { color: isMet ? 'green' : 'red' }]}>
              • {condition.text}
            </Text>
          );
        })}
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.proceedButton} onPress={sendCred}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 20,
    marginTop: 15,
  },
  input: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#c8ccca',
    color: '#787878',
    padding: 10,
  },
  passwordRequirements: {
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  requirement: {
    fontSize: 14,
  },
  proceedButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  label: {
    width: '100%',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default ProfileSetupScreen;