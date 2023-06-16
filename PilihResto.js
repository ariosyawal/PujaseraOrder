import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const PilihResto = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <View style={styles.outerContainer}>
    <ImageBackground source={require('./image/background.png')} style={styles.container}>
      <Text style={styles.heading}>Pilih Restoran</Text>
      <TouchableOpacity
        // style={[
        //   styles.restaurantButton,
        //   selectedRestaurant === 'Restoran A' && styles.selectedRestaurantButton,
        // ]}
        onPress={() => handleRestaurantSelection('Restoran A')}
      >
        <Image
            source={require('./image/Masboy.png')}
            style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity
        // style={[
        //   styles.restaurantButton,
        //   selectedRestaurant === 'Restoran B' && styles.selectedRestaurantButton,
        // ]}
        onPress={() => handleRestaurantSelection('Restoran B')}
      >
        <Image
            source={require('./image/warung_Steak.png')}
            style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity
        // style={[
        //   styles.restaurantButton,
        //   selectedRestaurant === 'Restoran C' && styles.selectedRestaurantButton,
        // ]}
        onPress={() => handleRestaurantSelection('Restoran C')}
      >
        <Image
            source={require('./image/Warung_babeh.png')}
            style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity
        // style={[
        //   styles.restaurantButton,
        //   selectedRestaurant === 'Restoran D' && styles.selectedRestaurantButton,
        // ]}
        onPress={() => handleRestaurantSelection('Restoran D')}
      >
        <Image
            source={require('./image/Chinese_Food.png')}
            style={styles.image}
      />
      </TouchableOpacity>
      {/* {selectedRestaurant && (
        <Text style={styles.selectedRestaurant}>
          Anda memilih: {selectedRestaurant}
        </Text>
      )} */}
      
      </ImageBackground>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  restaurantButton: {
    width: '90%',
    height: '18%',
    padding: 10,
    backgroundColor: 'rgba(131, 89, 227, 0.3)',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedRestaurantButton: {
    backgroundColor: '#007bff',
  },
  restaurantButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  selectedRestaurant: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default PilihResto;
