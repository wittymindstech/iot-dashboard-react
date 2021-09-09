import React from 'react';

import { View, StyleSheet, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView } from 'react-native';
import LoginScreen from './app/screens/LoginScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import SideMenuScreen from './app/screens/SideMenuScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import DeviceOnMapScreen from './app/screens/DeviceOnMapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    //<NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Devices') {
            return (
              <Ionicons
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'DeviceMap') {
            return (
              <Ionicons
                name={focused ? 'ios-list' : 'ios-list'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      
      
      <Tab.Screen name="Devices" component={MessagesScreen} options={{ tabBarBadge: 0 }} />
      <Tab.Screen name="DeviceMap" component={DeviceOnMapScreen} />
    </Tab.Navigator>
    //</NavigationContainer>
  );
}
export default class App extends React.Component {
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              
              <Stack.Screen name="Home" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="DeviceList" component={Home}/>
      
              
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