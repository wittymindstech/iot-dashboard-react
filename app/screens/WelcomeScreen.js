import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import {StyleSheet, View, Text, ImageBackground, Image, StatusBar, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
export default class WelcomeScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
        this.navigating = props.navigation;
      }
     
    render(){
        //const Stack = createStackNavigator();
        return (
            
        <View style = {styles.root}>
            
            <ImageBackground source = {require("../assets/BackgroundScreen.jpeg")} style = {{height:"100%", width: "100%",flex:1}}>
            
                <View style = {styles.header}>
                    <Image source = {require("../assets/Welcome.png")} style = {{resizeMode:"contain", width: "80%", justifyContent:"flex-start"}}></Image>
                    <Text style = {styles.textst}>User</Text>
                    <Image source = {require("../assets/to-your-IOT-Dashboard.png")} style = {{resizeMode:"contain", width: "80%", justifyContent:"flex-start"}}></Image>

                </View>
                <View style={[styles.userInfo]}>
                    <View style={styles.section}>
                        <Text style={styles.space}>
                            0
                        </Text>
                        <Text style = {styles.space}>
                            Currently Active devices
                        </Text>
                    </View>
                    <View style={styles.section}>
                        

                            <Text style={styles.space}>
                                0
                            </Text>
                            <Text style = {styles.space}>
                                Total Devices
                            </Text>
                        
                    </View>
                    <View style={styles.section}>
                        
                        <Text style={styles.space}>
                            0
                        </Text>
                        <Text style = {styles.space}>
                            Some other category ...
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Login"
                        color="#4287f5"
                        onPress={() => this.navigating.navigate('Login')}
                        style={styles.button}
                    />
                    
                    <Button
                        title="Devices"
                        color="#4287f5"
                        onPress={() => this.navigating.navigate('Devices')}
                        style={styles.button}
                    />
                    
                </View>
            </ImageBackground>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({

    root: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center"
    },
    header: {
        flex: 0.5,
        alignItems: 'center',
    // backgroundColor:"#fff",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        fontFamily: "sans-serif-condensed",
        paddingTop: StatusBar.currentHeight
    },
    textst: {
        flex: 0.4,
        alignItems: 'center', 
    // backgroundColor:"#fff",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        fontFamily: "sans-serif-condensed"
    },
    userInfo: {
        flex: 0.5,
        paddingBottom:100,
        flexDirection: 'column', 
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontWeight: "bold"
    },
    bordered: {
        borderBottomWidth: 1,
        borderColor: "#fff"
    },
    section: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent:"center",
        flexDirection:'column',
        width: "100%",
        paddingLeft: 50,
        borderBottomWidth: 3,
        borderColor: "#fff"
    },
    space: {
        marginBottom: 3,
        color: "#fff",    
        alignItems: 'flex-start',
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff"
    },
    buttonContainer:{
        flex: 0.1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom: 10
    },
    button:{
        borderRadius: 10
    }
});