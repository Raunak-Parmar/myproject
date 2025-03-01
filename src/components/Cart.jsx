/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const userImg = require('./images/user.png');
const dropImg = require('./images/dropdown.png');
const dotImg = require('./images/dot.png');

const CartScreen = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Turkey Egg',
      image: require('./images/egg.png'), 
      rating: '100%',
      price: '₹40/no',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Little Millet',
      image: require('./images/millet.png'),
      rating: '100%',
      price: '₹100/kg',
      quantity: 1,
    },
  ];

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={ item.image } style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemRating}>★★★★★</Text>
        <Text style={styles.itemPercentage}>{item.rating}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <View style={styles.itemActions}>
          <Text style={styles.buyNow}>Buy Now</Text>
          <Text style={styles.clear}>Clear</Text>
        </View>
      </View>
      <View style={styles.quantityControl}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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
    <View>
        <Text style={styles.sectionTitle}> Cart</Text>
    </View>
    <Image
        source={dropImg} 
        style={styles.ldropImg} 
    />
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.originalPrice}>₹19,999</Text>
          <Text style={styles.discountedPrice}>₹19,999</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderButton}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.bottomNav}>
              <TouchableOpacity style={styles.navItem}>
                <Icon name="home-outline" size={24} />
                <Text>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Icon name="leaf-outline" size={24} />
                <Text>My Crops</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Icon name="basket-outline" size={24} />
                <Text>Market</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Icon name="person-outline" size={24} />
                <Text>My Account</Text>
              </TouchableOpacity>
            </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    bottom:40,
  },
  listContainer: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 6,
    padding: 8,
    borderRadius: 8,
    height:100,

  },
  itemImage: {
    width: 88,
    height: 88,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    bottom:10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 400,
    fontStyle:'Roboto',
    top:35,
    paddingLeft:8,
  },
  itemRating: {
    fontSize: 14,
    color: '#4CAF50',
    marginVertical: 4,
    paddingLeft:8,
    top:24,
  },
  itemPrice: {
    fontSize: 16,
    color: '#282828',
    left:90,
    bottom:12,
    paddingLeft:14,
  },
  itemActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  buyNow: {
    color: '#4CAF50',
    marginRight: 16,
    fontFamily:'Roboto',
    fontSize:14,
    bottom:10,
    paddingLeft:8,
  },
  clear: {
    color: '#4CAF50',
    fontFamily:'Roboto',
    fontSize:14,
    bottom:10,
    paddingLeft:8,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:'green',
    paddingVertical: 3,
    borderRadius: 6,
    width: 58,
    bottom:28,
    right:40,
    height:28,
  },
  quantityButton: {
    height:10,
    borderRadius: 4,
    padding: 2,
    borderColor:'#4CAF50',
    paddingLeft:2,
  },
  quantityButtonText: {
    color: '#4CAF50',
    fontWeight: 300,
    fontSize: 22,
    height:110,
    bottom:14,
    borderColor:'#4CAF50',
    left:1,
  },
  quantityText: {
    color:'#4CAF50',
    fontSize: 18,
    fontWeight: 500,
    marginHorizontal: 8,
    bottom:3,
  },
  itemPercentage: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight:500,
    marginVertical: 4,
    paddingLeft:8,
    top:14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 60,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    height:40,
    borderTopColor: '#DDD',
  },
  totalContainer: {
    flexDirection: 'column',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 18,
    paddingHorizontal: 84,
    paddingLeft:40,
    height:54,
  },
  placeOrderText: {
    color: '#FFFFFF',
    fontStyle:'Roboto',
    fontSize: 14,
    left:20,
    fontWeight: '500',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  userImg:{
    width:56,
    height:56,
    left:12,
    bottom:10,
    transform: [{ scale: 0.6 }],
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
  sectionTitle: { fontFamily:'Roboto',fontSize: 16, fontWeight: 500, marginBottom: 4, color:'#787878',paddingLeft:30 },
  ldropImg:{
    transform: [{ scale: 0.46 }, { rotate: '90deg' }],
    left:10,
    bottom:30,
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
    padding:20,
  },
  navItem: { alignItems: 'center' },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    top:8,
  },
});

export default CartScreen;