/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { launchCamera } from 'react-native-image-picker';

const cameraImg = require('./images/Camera.png');

const userImg = require('./images/user.png');
const dropImg = require('./images/dropdown.png');
const dotImg = require('./images/dot.png');
const sunImg = require('./images/sun.png');
const sun2Img = require('./images/sun2.png');
const cloudImg = require('./images/cloud.png');
const mangoImg = require('./images/1-mango-seedling.png');
const jamunImg = require('./images/9-Jamun.png');
const orImg = require('./images/ornamental.png');
const market2 = require('./images/market2.png');

const App = ({navigation}) => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Image URI: ', response.assets[0].uri);
      }
    });
  };
  

  const newsItems = [
    { id: '1', title: 'Crop Prices on Rise due to upcoming monsoons.' },
    { id: '2', title: 'Crop Prices on Rise due to upcoming monsoons.' },
    { id: '3', title: 'Crop Prices on Rise due to upcoming monsoons.' },
  ];

  return (
    <>
    <View style={styles.imageContainer}>
      <Image
          source={userImg}
          style={styles.userImg} 
      />
      <Image
          source={dropImg} 
          style={styles.dropImg} 
      />
      <Image
          source={dotImg} 
          style={styles.dotImg} 
      />
    </View>
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Text style={styles.locationText}>
        <Image source={cloudImg}  style={styles.locationIcon}/>
          <Text style={styles.textTam}>Tambaram</Text> 
        </Text>
        <Text style={styles.temperatureText}>25°C</Text>
        <Text style={styles.dateText}>Sat, 30 Nov</Text>
        <Text style={styles.weatherStatus}>Cloudy</Text>
        <Image
          source={sunImg} 
          style={styles.sunImg} 
        />
        <Image
          source={sun2Img} 
          style={styles.sun2Img} 
        />
        <Image
          source={cloudImg} 
          style={styles.cloudImg} 
        />
      </View>
        <Text style={styles.sectionTitle}>Recently Viewed Crops</Text>
        <View style={styles.viewContainer}>
          <Image
            source={dropImg} 
            style={styles.ldropImg} 
          />
          <Image
            source={mangoImg} 
            style={styles.mangoImg} 
          />
          <Image
            source={jamunImg} 
            style={styles.jamunImg} 
          />
          <Image
            source={orImg} 
            style={styles.orImg} 
          />
          <Image
          source={dropImg} 
          style={styles.rdropImg} 
          />
        </View>
   
      {/* News Section */}
      <Text style={styles.sectionTitle2}>News</Text>
      <View style={styles.section}>
        {newsItems.map((news) => (
          <View key={news.id} style={styles.newsItem}>
            <View style={styles.newsThumbnail} />
            <View>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.readMore}>Read More</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.section3}>
        <Text style={styles.sectionTitle3}>Recently Viewed Items</Text>
      </View>
      </View>
      <View style={styles.cameraButtonContainer}>
  <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
    <Icon name="camera-outline" size={28} color="#fff" />
  </TouchableOpacity>
</View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={market2} style={market2} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('ProductScreen')}>
          <Icon name="leaf-outline" size={24} />
          <Text>My Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="basket-outline" size={24} onPress={() => navigation.navigate('MarketPlace')}/>
          <Text>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} onPress={() => navigation.navigate('ProfileScreen')}/>
          <Text>My Account</Text>
        </TouchableOpacity>
      </View>
  </>
  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16
  },
  weatherContainer: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    width:380,
    height:145,
    top:10,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  locationIcon:{
    position:'absolute',
    width:10,
    height:10,
  },
  textTam:{ 
    fontSize:12
  },
  locationText: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft:5,
    paddingTop:4,
    fontFamily:'roboto',
    backgroundColor:'#4CAF50',
    color:'white',
    fontSize: 14,
    borderRadius:20,
    borderColor:'#4CAF50',
    borderWidth:1,
    fontWeight:500,
    marginLeft:14,
    bottom:29,
    left:19,
    width:85,
    height:26
  },
  temperatureText: {
    fontSize: 44,
    fontWeight: 400,
    color: '#282828',
    right:66,
    top:7
   },
  dateText: { 
    fontFamily:'roboto',
    fontSize: 14,
    color: '#282828',
    fontWeight:100,
    right:159,
    top:34 
  },
  weatherStatus: {
    fontSize: 16,
    fontWeight:500,
    color: '#282828',
    marginTop: 8 ,
    top:20,
    right:24
  },
  section3:{
    top:40,
    fontSize:14,
    marginBottom: 8,
    color:'#787878',
    paddingLeft:15,
    bottom:10
  },
  sectionTitle3:{
    fontFamily:'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color:'#787878',
    top:4,
    paddingLeft:5,
    marginBottom: 8
  },
  sectionTitle: { 
    fontFamily:'Roboto',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
    color:'#787878',
    paddingLeft:15
   },
  sectionTitle2: { 
    fontFamily:'Roboto',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
    color:'#787878',
    paddingLeft:15,
    bottom:10
  },
  cropImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 8
   },
  newsItem: { 
    width:310,
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    paddingLeft:16,
    paddingTop:10
   },
  newsThumbnail: { 
    display:'flex',
    flexWrap:'wrap',
    width: 86,
    height: 52,
    backgroundColor: '#CCC',
    marginRight: 8,
    borderRadius:4
   },
  newsTitle: { 
    fontFamily:'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#282828'
   },
  readMore: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 4,
    fontWeight:400
   },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    top:8,
    width:420,
    display:'flex',
    padding:30,
  },
  navItem: { 
    alignItems: 'center'
   },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    top:10,
  },
  userImg:{
    width:46,
    height:46,
    left:27,
    transform: [{ scale: 1.0 }],
  },
  dropImg:{
    width:16,
    height:16,
    left:34,
    top:7,
  },
  dotImg:{
    width:24,
    height:24,
    left:320,
  },
  sunImg:{
    transform: [{ scale: 0.5 }],
    right:90,
    bottom:10,
  },
  sun2Img:{
    transform: [{ scale: 0.5 }],
    right:172,
    bottom:10,
    opacity:0.8,
  },
  cloudImg:{
    transform: [{ scale: 0.45 }],
    right:245,
    top:1,
  },
  mangoImg:{
    transform: [{ scale: 0.46 }],
    right:65,
  },
  jamunImg:{
    transform: [{ scale: 0.46 }],
    right:120,
  },
  orImg:{
    transform: [{ scale: 0.46 }],
    right:180,
  },
  viewContainer:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    width:380,
    height:100,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  ldropImg:{
    transform: [{ scale: 0.46 }, { rotate: '90deg' }],
    right:16,
  },rdropImg:{
    transform: [{ scale: 0.46 }, { rotate: '270deg' }],
    right:230,
  },
  section:{
    display:'flex',
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    width:380,
    height:165,
    borderRadius: 10,
    bottom:10,
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 70, // Adjust to align above bottomNav
    right: 20, // Move it to the right side
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    elevation: 5, // Shadow for better visibility
    padding: 10,
  },
  cameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  market2:{
    transform: [{ scale: 0.5 }],
    width:10,
    height:10,
  },
  
});


export default App;