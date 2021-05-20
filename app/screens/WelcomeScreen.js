import React from 'react'
import {StyleSheet, View, Text, ImageBackground, Image, StatusBar} from 'react-native'

export default class WelcomeScreen extends React.Component{

    render(){
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
        flex: 0.4,
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
        flex: 0.6,
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
});