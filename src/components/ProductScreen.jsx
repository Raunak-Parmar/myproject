import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add profile icon and more options here */}
      </View>
      <View style={styles.productImage}>
      <Image source={require("../components/images/Vector.png")}/>
      </View>
      <View style={styles.contentFlex}>
        <View style={styles.prodDetails}>
          <Text style={styles.productName}>Turkey Egg</Text>
          <Text style={styles.rating}>★★★★★</Text>
          <View style={styles.flex}>
            <Text style={styles.percentage}>100%</Text>
            <Text style={styles.price}>₹40</Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>1</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
              <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
                <Icon name="home-outline" size={24} />
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
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: { 
    marginTop: 20,
    flex: 1,
    padding: 5,
    backgroundColor: '#F5F5F5',
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
  navItem: { alignItems: 'center' },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    top:8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  footerContainer: {
    marginTop: "auto",
  },
  productImage: {
    width: "380px",
    height: "248px",
    marginHorizontal : "auto",
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft: 8,
  },
  rating: {
    fontSize: 16,
    color: "#FFD700",
    marginBottom: 5,
    paddingLeft: 8,
  },
  percentage: {
    fontSize: 16,
    color: "#28A745",
    marginBottom: 5,
    paddingLeft: 8,
    width: "70%",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: "16%",
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    borderColor: "#28A745",
    height: "40%",
  },
  quantityButton: {
    padding: 4,
  },
  quantityText: {
    fontSize: 18,
    color: "#28A745",
  },
  quantityNumber: {
    marginHorizontal: 10,
    fontSize: 18,
    color: "#28A745",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartButton: {
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  buyNowButton: {
    backgroundColor: "#28A745",
    padding: 15,
    //borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  addButtonText: {
    color: "#28A745",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 10,
    boxShadow: "0px -3px 6px rgba(0, 0, 0, 0.2)",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
  },
  contentFlex: {
    display: "flex",
    flexDirection: "row",
  },
  prodDetails: {
    width: "80%",
  },
});

export default ProductScreen;