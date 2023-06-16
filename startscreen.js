// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet,Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';


// const StartScreen = ({navigation}) => {
//   const handleStart = () => {
//     navigation.navigate('LoginScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Selamat Datang di PujaseraOrder</Text>
//       <Button
//         title="Go to Login"
//         onPress={handleStart}
//       />
//       {/* <TouchableOpacity style={styles.button} onPress={handleStart}>
//         <Text style={styles.buttonText}>login</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 40,
//     color: 'black'
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default StartScreen;

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {Button} from 'react-native-paper'

const StartScreen = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate('Login');
  };

  const handlePenjual = () => {
    navigation.navigate('Penjual');
  };

  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={require('./image/background.png')} style={styles.container}>
      <Image
      source={require('./image/Saly-1.png')}
      style={styles.image}
      />
      <Button  mode='contained' onPress={handleStart} style={styles.button} >Masuk</Button>
      <Button  mode='contained' onPress={handlePenjual} style={{width:'80%'}} >Masuk penjual</Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    marginBottom: 16,
    width: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  outerContainer:{
    flex:1,
  },
  
});

export default StartScreen;
