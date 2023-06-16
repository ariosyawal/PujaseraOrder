// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import StartScreen from './StartScreen';
// import LoginScreen from './LoginScreen';

// const Stack = createNativeStackNavigator();
 
// const App = () => {
//   return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="StartScreen">
//       <Stack.Screen name="Start" component={StartScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// };

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import PilihResto from './PilihResto';
import LoginPenjual from './LoginPenjual';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={SignUpScreen} />
        <Stack.Screen name="Resto" component={PilihResto} />       
        <Stack.Screen name="Penjual" component={LoginPenjual} />         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
