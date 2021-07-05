import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
export default class SideMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.navigating = props.navigation;
  }
 
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  
  drawerContent = () => {
    const Stack = createStackNavigator();
    return (
      <View style={styles.openContainer}>
        <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
          <AntDesign name="closecircle" size={30} color="red" style={{alignItems:'center'}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.navigating.navigate('Login')} style={styles.menuElement}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuElement} onPress={() => this.navigating.navigate('Welcome')}>
          <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuElement} onPress={() => this.navigating.navigate('Devices')}>
          <Text style={styles.textStyle}>Devices</Text>
        </TouchableOpacity>
        
      </View>
    );
  };
 
  
  render() {
    
    return (
      
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
          
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.menu}>
            <Feather name="sidebar" size={40} color="white" style={{alignSelf:'center',justifyContent:'center'}}/>
          </TouchableOpacity>
          
        </MenuDrawer>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  openContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 30,
    zIndex: 0,
    backgroundColor: "#a5a6a8",
    borderRadius: 10,
    height:"100%"
  },
  animatedBox: {
    height:50,
    width: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    //backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    
    
  },
  menu:{
    height:50,
    width: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#27a12d',
    borderRadius: 5
  },
  menuElement:{
    width: "100%",
    height: 45,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textStyle:{
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    fontSize: 16
  }
})