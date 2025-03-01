import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const mainImg = require('../../assets/green.png');

const ProfileSetupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setName('');
      setEmail('');
      setPassword('');
    }, [])
  );

  const sendCred = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigation.navigate('HomeScreen');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={mainImg} style={styles.icon} />
      <Text style={styles.title}>Profile Setup</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Username" value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} keyboardType="email-address" onChangeText={setEmail} />

      <Text style={styles.label}>Set Password</Text>
      <TextInput style={styles.input} placeholder="Set Password" value={password} secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.proceedButton} onPress={sendCred}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
  },
  input: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#c8ccca',
    color: '#000',
    paddingHorizontal: 10,
  },
  proceedButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileSetupScreen;