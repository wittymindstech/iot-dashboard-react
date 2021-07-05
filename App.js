import React from 'react';

import { View, StyleSheet, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView } from 'react-native';
import LoginScreen from './app/screens/LoginScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import SideMenuScreen from './app/screens/SideMenuScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class App extends React.Component {
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
              
              <Stack.Screen name="Home" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Devices" component={MessagesScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ccd2db'
  },

  input:{
    width:200,
    height:50, 
    borderWidth:1,
    marginTop: 200,
    marginLeft: 100
  }
});

//export default App;