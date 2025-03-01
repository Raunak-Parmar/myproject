import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [username, setUsername] = useState('Username 12345');
  const [handle, setHandle] = useState('@Username12345');
  const [language, setLanguage] = useState('English');
  const [phone, setPhone] = useState('+91 97979 87878');
  const [email, setEmail] = useState('xyxyxx@gmail.com');
  const [address, setAddress] = useState('Address line 1 line 2 line 3');

  const [modalVisible, setModalVisible] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [setter, setSetter] = useState(null);

  const navigation = useNavigation();

  const handleEditField = (field, value, setterFunction) => {
    setCurrentField(field);
    setCurrentValue(value);
    setSetter(() => setterFunction);
    setModalVisible(true);
  };
  const handleSupport = () => {
    Alert.alert('Customer Support', 'Redirecting to customer support...');
  };

  const handlePrivacyPolicy = () => {
    Alert.alert('Privacy Policy', 'Opening privacy policy...');
  };

  const handleDeactivate = () => {
    Alert.alert(
      'Deactivate Account',
      'Are you sure you want to deactivate your account? This action is irreversible.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Deactivate', onPress: () => Alert.alert('Account Deactivated') },
      ]
    );
  };

  const saveChanges = () => {
    if (setter) setter(currentValue);
    setModalVisible(false);
  };
  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        onPress: () => navigation.replace('LoginScreen'),
      },
    ]);
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../components/images/Image.png")}
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
        <TouchableOpacity onPress={() => handleEditField('Username', username, setUsername)}>
          <Text style={styles.editText}>Edit Username</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        {renderInfo('Language', language, () => handleEditField('Language', language, setLanguage))}
        {renderInfo('Phone Number', phone, () => handleEditField('Phone Number', phone, setPhone))}
        {renderInfo('Email', email, () => handleEditField('Email', email, setEmail))}
        {renderInfo('Shipping Address', address, () => handleEditField('Shipping Address', address, setAddress))}
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleSupport}>
          <Text style={styles.actionText}>Customer Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeactivate}>
          <Text style={styles.actionText}>Deactivate Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacyPolicy}>
          <Text style={styles.actionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {currentField}</Text>
            <TextInput
              style={styles.input}
              value={currentValue}
              onChangeText={setCurrentValue}
            />
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
              <Button title="Save" onPress={saveChanges} color="green" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function renderInfo(label, value, onEdit) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoValueContainer}>
        <View>
          <Text style={styles.infoLabel}>{label}</Text>
          <Text style={styles.infoValue}>{value}</Text>
        </View>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 88,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  handle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  editText: {
    color: '#28A745',
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  infoContainer: {
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 2.5,
  },
  infoRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#787878',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoValue: {
    marginRight: 10,
    fontSize: 16,
    color: '#787878',
  },
  logoutButton: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});