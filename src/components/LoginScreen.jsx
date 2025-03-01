import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const eye = require('./images/eye-slash.png');
const oeye = require('./images/oeye.png');
const mainImg = require('./images/green.png');

const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleLogin = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Name cannot be empty');
      return;
    } 
    if (!password.trim()) {
      Alert.alert('Error', 'Password cannot be empty');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }
    navigation.navigate('HomeScreen');
  };
  

  return (
    <View style={styles.container}>
      <Image source={mainImg} style={styles.icon} />
      <Text style={styles.title}>Login</Text>
      
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          value={password}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
        <Image
          source={isPasswordVisible ? oeye : eye} 
          style={styles.eyeIcon}
        />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileSetupScreen')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={handleLogin}>
        <Text style={styles.proceedButtonText}>Login</Text>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon:{
    width: 10,
    height: 10,
    bottom:6,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  linkText: {
    color: '#31A2FF',
    fontSize: 16,
  },
  label: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;