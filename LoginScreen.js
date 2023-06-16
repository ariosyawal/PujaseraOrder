// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import StartScreen from './StartScreen';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // const handleLogin = () => {
    
//   //   navigation.goBack(StartScreen);
//   // };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
   
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

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet, ImageBackground, Image } from 'react-native';
import { Divider,Button } from 'react-native-paper';



const LoginScreen = ({navigation}) => {
  const [Username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', Username);
    console.log('Password:', password);
    navigation.navigate('Resto');
  };

  const handleSign = () => {
    navigation.navigate('Sign');
  };

  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={require('./image/background.png')} style={styles.container}>
      <Image
      source={require('./image/burger_masuk.png')}
      style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={Username}
        onChangeText={text => setEmail(text)}
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor='black'
      />
      <Button  mode='contained' onPress={handleLogin} style={styles.button} >Login</Button>
      <Button  mode='contained' onPress={handleSign} style={{width:'80%'}} >Daftar</Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    marginBottom: 16,
    width: '80%',
  },
  outerContainer:{
    flex:1,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  title: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'transparent',
    fontSize: 24,
    marginBottom: 20,
    color:'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingHorizontal: 15

    
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'rgba(0,0, 0, 0.3)',
    marginBottom: 15,
    paddingHorizontal: 15,
    color:'black',
    shadowColor: 'rgba(255, 255, 255, 255)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 100,
    shadowRadius: 1,
    elevation: 1,
  },
});

export default LoginScreen;
