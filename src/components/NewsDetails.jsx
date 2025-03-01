/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewsDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.header}>News</Text>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image}/>
        <Text style={styles.title}>CROP PRICES ON RISE DUE TO UPCOMING MONSOONS.</Text>
        <Text style={styles.content}>
          sapien placerat. placerat. sit adipiscing convallis. ex quam urna. Nam lobortis, ac placerat 
          ullamcorper porta lacus, tortor. tincidunt nisi Donec at, vitae{'\n\n'}
          facilisis malesuada est. quis Sed maximus Quisque fringilla cursus non vehicula, tincidunt 
          non quis maximus Ut sed risus vitae laoreet tortor. Lorem non. at{'\n\n'}
          sodales. ullamcorper luctus odio vitae hendrerit lorem. non. non nisl. dui ex. sed Praesent leo. 
          vitae efficitur. urna. convallis. nec ultrices est. Cras est.
          alesuada est. quis Sed maximus Quisque fringilla cursus non vehicula, tincidunt 
          non quis maximus Ut sed risus vitae laoreet tortor. Lorem non. at{'\n\n'}
          sodales. ullamcorper luctus od
        </Text>
        <TouchableOpacity>
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888888',
    marginBottom: 12,
    left:10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: 380, 
    height: 650, 
    justifyContent: 'space-between', 
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    color: '#333333',
    left:12,
    bottom:50,
  },
  content: {
    fontFamily:'Roboto',
    width: 330,
    fontSize: 12,
    color: '#666666',
    lineHeight: 20,
    fontWeight:400,
    bottom:40,
    left:12,
  },
  nextButton: {
    fontSize: 12,
    fontWeight: 700,
    color: 'green',
    textAlign: 'right',
    fontFamily:'Roboto',
    bottom:30,
    right:10,
  },
});

export default NewsDetails;