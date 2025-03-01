import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const Frame10 = () => {
  const diseases = [
    { id: '1', name: 'Alternatia Blight', image: require('./images/Alternaria.png') },
    { id: '2', name: 'Anthracnose', image: require('./images/Anthracnose.png') },
    { id: '3', name: 'Disease 3', image: require('./images/Anthracnose.png') },
  ];

  const pests = [
    { id: '1', name: 'Aphids', image: require('./images/Alternaria.png') },
    { id: '2', name: 'Anthracnose', image: require('./images/Anthracnose.png') },
    { id: '3', name: 'Disease 3', image: require('./images/Anthracnose.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search products"
          style={styles.searchInput}
        />
        <Image source={require('./images/microphone.png')} style={styles.micIcon} />
      </View>
      <Text style={styles.sectionHeader}>Recently Viewed Crops</Text>
      <View style={styles.recentlyViewedContainer}>
        <View style={styles.recentlyViewedItem} />
        <View style={styles.recentlyViewedItem} />
        <View style={styles.recentlyViewedItem} />
      </View>
      <View style={styles.carouselContainer}>
        <Image
          source={require('./images/Anthracnose.png')}
          style={styles.carouselImage}
        />
        <Text style={styles.carouselText}>Watermelon</Text>
      </View>
      <Text style={styles.sectionHeader}>My Diseases Database</Text>
      {diseases.map((item) => (
        <TouchableOpacity key={item.id} style={styles.listItem}>
          <Image source={item.image} style={styles.listImage} />
          <Text style={styles.listText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.sectionHeader}>My Pests Database</Text>
      {pests.map((item) => (
        <TouchableOpacity key={item.id} style={styles.listItem}>
          <Image source={item.image} style={styles.listImage} />
          <Text style={styles.listText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.footerText}>
        It is advisable to contact the ______ before taking any actions
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.2,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 16,
    height: 30,
  },
  searchInput: {
    flex: 1,
    fontSize: 10,
    paddingTop:7,
  },
  micIcon: {
    width: 10,
    height: 10,
    tintColor: '#999999',
  },
  sectionHeader: {
    marginTop: 8,
    marginBottom: 2,
    fontSize: 14,
    fontWeight: 600,
    color: '#333333',
  },
  recentlyViewedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentlyViewedItem: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  carouselContainer: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: 200,
  },
  carouselText: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 4,
    padding: 8,
  },
  listImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  listText: {
    fontSize: 14,
    color: '#333333',
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    textAlign: 'center',
    color: '#999999',
  },
});

export default Frame10;