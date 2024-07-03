import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
  { id: '1', name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/Menu.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={require('../assets/Search.png')} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.title}>OUR STORY</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.circularButton}>
            <Image source={require('../assets/Listview.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circularButton}>
            <Image source={require('../assets/Filter.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 480,
    marginVertical: 10,
    letterSpacing: 3,
    fontFamily: 'TenorSans',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circularButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  product: {
    flex: 1,
    width: 180,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 180,
    height: 245,
    marginBottom: 10,
    resizeMode: 'cover',
    alignItems: 'left'
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 5,
  },
  addIcon: {
    width: 20,
    height: 20,
  },
  productDetails: {
    alignItems: 'flex-start',
  },
  productName: {
    fontWeight: 480,
    fontFamily: 'TenorSans',
  },
  productDescription: {
    fontFamily: 'TenorSans', 
    fontSize: 13,
    color: '#555'
  },
  price: {
    color: '#ed7014',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'TenorSans',
  },
});


export default HomeScreen;
