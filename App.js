import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const restaurants = [
    {
      id: '1',
      name: 'Khadak Singh Da Dhaba',
      discount: '50% OFF up to ₹100',
      deliveryTime: '26 mins',
      img: 'https://khadaksinghdadhaba.com/assets/img/banner-outlet-12.jpeg',
      label: 'NEAR & FAST',
    },
    {
      id: '2',
      name: 'The Meal Factory',
      discount: '60% OFF up to ₹120',
      deliveryTime: '45 mins',
      img: 'https://b.zmtcdn.com/data/pictures/chains/8/19491088/3d19afec8fbc8deabb31cd37008b6cbb.jpg?fit=around|960:500&crop=960:500;*,*',
    },
    // Add more restaurant data as needed
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Ionicons name="location-outline" size={24} color="red" />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationText}>A Block</Text>
          <Text style={styles.subLocationText}>Sector 63, Noida</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Ionicons name="md-person-circle-outline" size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search "thali"'
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="red" />
        </TouchableOpacity>
      </View>

      {/* Gold Promotion Section */}
      <View style={styles.promoContainer}>
        <Text style={styles.promoTitle}>GOLD</Text>
        <Text style={styles.promoText}>Unlimited free deliveries & more at</Text>
        <Text style={styles.promoPrice}>₹30 for 3 months</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Join Gold now →</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveTab}>Favourites</Text>
        </TouchableOpacity>
      </View>

      {/* Restaurant List Section */}
      <ScrollView style={styles.restaurantListContainer}>
        {restaurants.map((restaurant) => (
          <View key={restaurant.id} style={styles.restaurantContainer}>
            <View style={styles.restaurantCard}>
              <Image source={{ uri: restaurant.img }} style={styles.restaurantImage} />
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantDiscount}>{restaurant.discount}</Text>
              <Text style={styles.restaurantTime}>{restaurant.deliveryTime}</Text>
              {restaurant.label && (
                <TouchableOpacity>
                  <Text style={styles.restaurantLabel}>{restaurant.label}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity>
          <Ionicons name="delivery-dining" size={24} color="red" />
          <Text style={styles.bottomNavTextActive}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="restaurant-menu" size={24} color="gray" />
          <Text style={styles.bottomNavTextInactive}>Dining</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="broadcast-tower" size={24} color="gray" />
          <Text style={styles.bottomNavTextInactive}>Live</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  locationTextContainer: {
    marginLeft: 8,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subLocationText: {
    color: 'gray',
    fontSize: 14,
  },
  profileIcon: {
    marginLeft: 'auto',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 25,
  },
  searchIcon: {
    marginLeft: 8,
  },
  promoContainer: {
    backgroundColor: '#FFF5CC',
    padding: 20,
    borderRadius: 12,
    margin: 16,
    alignItems: 'center',
  },
  promoTitle: {
    color: '#FFB300',
    fontWeight: 'bold',
    fontSize: 24,
  },
  promoText: {
    color: '#FFB300',
  },
  promoPrice: {
    color: '#FFB300',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  promoButton: {
    marginTop: 12,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 25,
  },
  promoButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  activeTab: {
    fontWeight: 'bold',
    color: 'red',
  },
  inactiveTab: {
    color: 'gray',
  },
  restaurantListContainer: {
    marginTop: 16,
  },
  restaurantContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  restaurantCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 16,
  },
  restaurantImage: {
    height: 160,
    borderRadius: 12,
  },
  restaurantName: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  restaurantDiscount: {
    color: 'gray',
  },
  restaurantTime: {
    color: 'gray',
  },
  restaurantLabel: {
    color: 'green',
    marginTop: 8,
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
  },
  bottomNavTextActive: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
    marginTop: 4,
  },
  bottomNavTextInactive: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 4,
  },
});
