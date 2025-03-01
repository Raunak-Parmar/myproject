/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { useState } from 'react';
import { View, Text,TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const userImg = require('./images/user.png');
const dropImg = require('./images/dropdown.png');
const dotImg = require('./images/dot.png');

export const MarketPlace = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Animal Products');

  const products = [
    { id: 1, name: 'Paddy Seed', price: '₹22/Kg', image: require('./images/paddyseed.png'), rating: '★★★★★', availability: '100%' },
    { id: 2, name: 'Ragi', price: '₹25/kg', image: require('./images/ragi.png'), rating: '★★★★★', availability: '100%' },
    { id: 3, name: 'Foxtail Millet', price: '₹75/kg', image: require('./images/foxtail.png'), rating: '★★★★★', availability: '100%' },
    { id: 4, name: 'Proso Millet', price: '₹80/kg', image: require('./images/proso.png'), rating: '★★★★★', availability: '100%' },
    { id: 5, name: 'Little Millet', price: '₹100/kg', image: require('./images/littlemillet.png'), rating: '★★★★★', availability: '100%' },
    { id: 6, name: 'Black Gram Seed', price: '₹80/kg', image: require('./images/blackgram.png'), rating: '★★★★★', availability: '100%' },
];

const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
);


    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productRating}>{item.rating}</Text>
                <Text style={styles.productAvailability}>{item.availability}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>
    );
      return (
        <View style={styles.container}>
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
          {/* Search Bar */}
          <View style={styles.header}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search products"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Text style={styles.viewCart} onPress={() => navigation.navigate('ProductScreen')}>View Cart</Text>
            </View>

            {/* Filter Buttons */}
            <View style={styles.filterBar}>
                {['Sort By', 'Plant Products', 'Animal Products'].map(filter => (
                    <TouchableOpacity
                        key={filter}
                        style={[styles.filterButton, activeFilter === filter && styles.activeFilter]}
                        onPress={() => setActiveFilter(filter)}
                    >
                        <Text style={activeFilter === filter ? styles.activeFilterText : null}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Product List */}
            <FlatList
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                style={styles.productList}
            />
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem}>
              <Icon name="home-outline" size={20}  style={styles.home}  onPress={() => navigation.navigate('HomeScreen')} />
               <Text style={styles.hometext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
               <Icon name="leaf-outline" size={20} style={styles.product} onPress={() => navigation.navigate('ProductScreen')}/>
                <Text style={styles.hometext}>My Product</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem } onPress={() => navigation.navigate('MarketPlace')}>
              <Image source={require('./images/market1.png')}style={styles.navImage}/>
              <Image source={require('./images/market2.png')}style={styles.smallImg}/>
              <Text style={{fontSize: 14,color: '#333',bottom:10}}
              >Market</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('ProfileScreen')}>
              <Icon name="person-outline" size={22}  style={styles.account}/>
                <Text style={styles.hometext}>My Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e8f5e9',
  },
  
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  viewCart: {
    color: '#388e3c',
    fontWeight:500,
    fontFamily:'Roboto',
    
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    top:8,
  },
  filterButton: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  
  },
  activeFilter: {
    backgroundColor: '#ddd',
    fontSize:11,
    color:'black',
  },
  activeFilterText: {
    color: '#fff',
    fontSize:12,
  },
  productList: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  productImage: {
    width: 88,
    height: 88,
    borderRadius: 12,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontWeight:'400',
    fontSize: 16,
  },
  productRating: {
    color: '#388e3c',
  },
  productAvailability: {
    color: '#388e3c',
  },
  productPrice: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)',
    left:100,
    bottom:20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  navButton: {
    alignItems: 'center',
  },
  userImg:{
    width:56,
    height:56,
    left:12,
    bottom:10,
    transform: [{ scale: 0.6 }],
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    top:12,
    width:420,
    display:'flex',
    padding:12,
    height:70,
  },
  dropImg:{
    width:16,
    height:16,
    left:10,
    top:10,
  },
  dotImg:{
    width:24,
    height:24,
    left:300,
    top:8,
  },
  navItem:{
    marginBottom:6,
    paddingBottom:15,
    paddingLeft:10,
  },
  navImage:{
    top:22,
    transform: [{ scale: 0.6 }],
  },
  smallImg:{
    bottom:10,
    transform: [{ scale: 0.5 }],
    left:4,
    
  },
  home:{
    top:10,
    left:5,
  },
  hometext:{
    top:10,
    fontsize:6,
  },
  product:{
    top:10,
    left:18,
  },
  account:{
    top:10,
    left:16,
    transform: [{ scale: 0.9 }],
  },
});
export default MarketPlace;