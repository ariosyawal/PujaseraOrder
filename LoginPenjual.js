//MASUK SEBAGAI PENJUAL
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import { Divider,Button, TextInput as PaperTextInput } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons';



const LoginPenjual = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', Username);
    console.log('Password:', password);
    navigation.navigate('Login');

  };
  
  const handleLoginpenjual = () => {
    navigation.navigate('');
  };

  const handleSign = () => {
    navigation.navigate('Sign');
  };

  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={require('./image/background.png')} style={styles.container}>
      <Image
      source={require('./image/masuk_penjual.png')}
      style={styles.image}
      />
      <Text style={styles.title}>Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={Username}
        onChangeText={text => setUsername(text)}
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
    <View style={styles.buttonContainer}>
      <Button mode='contained' onPress={handleLogin}style={[styles.button, { backgroundColor: 'rgba(139, 99, 220, 0.6)' }]}>Masuk Sebagai Pembeli,Masuk</Button>
      <Button mode='contained' onPress={handleLoginpenjual} style={[styles.button, {backgroundColor: 'rgba(139, 99, 220, 0.8)'}]} >                      Login                       </Button>
      <View style={styles.buttonMargin} />
      <Button mode='contained' onPress={handleSign} style={[styles.button, {backgroundColor: 'rgba(139, 99, 220, 0.6)'}]}>      Belum Punya akun,Daftar          </Button>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 7,
    width: '100%',
    paddingHorizontal: 51,
    textAlign: 'left',
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
    paddingHorizontal: 15,
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

export default LoginPenjual;