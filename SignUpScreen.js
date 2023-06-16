// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const SignUpScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Perform sign up logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />
//       <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default SignUpScreen;

import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet, ImageBackground, Image } from 'react-native';
import {Button} from 'react-native-paper'

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Login');

    // Perform sign up logic here
  };


  return (
    <View style={styles.outerContainer}>
        <ImageBackground source={require('./image/background.png')} style={styles.container}>
        <Image
            source={require('./image/burger_daftar.png')}
            style={styles.image}
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
        placeholderTextColor='black'

      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
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
      <Button  mode='contained' onPress={handleSignUp} style={styles.button} >Login</Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    width: '80%'
  },
    outerContainer: {
        flex:1,  
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
  },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(131, 89, 227, 0.1)'

    },
});

export default SignUpScreen;
