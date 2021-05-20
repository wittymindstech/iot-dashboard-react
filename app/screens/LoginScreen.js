import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default class LoginScreen extends React.Component {

  
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source = {require('../assets/J4o.gif')} style = {styles.image}>
          <Text style={styles.logo}>IOT Dashboard</Text>
          <View style = {styles.inputView}>
            <TextInput  
                  style={styles.inputText}
                  placeholder="Email..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({email:text})}
            />
          </View>
          <View style = {styles.inputView}>
            <TextInput  
                  style={styles.inputText}
                  placeholder="Password..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({password:text})}
                  secureTextEntry
            />
          </View>
          <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  image: {
    flex:1,
    resizeMode: "stretch",
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  logo:{
    fontWeight: "bold",
    fontSize:45,
    fontFamily: 'sans-serif-condensed',
    color:"#c4bebb",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    height:50,
    color:"white",
    marginBottom:-15,
    alignItems: 'center',
    justifyContent: "center"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  }
});
