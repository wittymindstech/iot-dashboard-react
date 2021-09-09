import React, { useState} from 'react';
import { View, FlatList, StyleSheet, StatusBar, TextInput, Button } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemAddAction from '../components/ListItemAddAction';
import uuid from 'react-native-uuid';
import colors from '../config/colors';
import AppText from '../components/AppText';
import { render } from 'react-dom';
import DeviceOnMapScreen from './DeviceOnMapScreen';
const initialMessages = [
    {
        id: uuid.v4(),
        title: 'first device',
        description: 'Kanpur',
        image: require('../assets/profile-photo.png')
    },
    {
        id: uuid.v4(),
        title: 'Second device',
        description: 'Lucknow',
        image: require('../assets/profile-photo.png')
    }
];

function MessagesScreen({navigation}) {
    //var val = 3;
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    let num =3;
    const handleDelete = (message) =>{
        //const newMessages = 

        setMessages(messages.filter((m) =>m.id!==message.id));
    };

    const handleAdd = (message)=>{
        setMessages(messages.concat(message));
        num = num+1;
    };


            return (
            <Screen>
                <Button
                    title="DeviceMap"
                    color="#4287f5"
                    onPress={() => navigation.navigate('DeviceMap')}
                    //style={styles.button}
                />
                <View style = {{backgroundColor:"#fff", marginBottom:10, paddingBottom: 5}}>
                    <AppText children = {"Add new device"} style={{fontWeight:"bold", color:"#434445" }}></AppText>
                    <TextInput
                        placeholder="Title" 
                        style = {styles.input}
                        underlineColorAndroid="blue"
                        onChangeText={setTitle} 
                        value = {title}
                    />
                    <TextInput 
                        placeholder="Location"
                        style = {styles.input} 
                        underlineColorAndroid="green"
                        onChangeText={setLocation} 
                        value = {location}
                    />
                    <ListItemAddAction style={{width:35, height:35, alignItems:'flex-end'}} onPress={()=>{handleAdd({id: uuid.v4(), title: title, description: location, image: require('../assets/profile-photo.png')});}}/>
                </View>
                <FlatList 
                    data = {messages}
                    keyExtractor = {message => message.id.toString()}
                    renderItem = {({item})=>
                        <ListItem 
                            title = {item.title} 
                            subTitle = {item.description} 
                            image = {item.image} 
                            onPress = {()=>console.log("Message sent")} 
                            renderRightActions={()=>(
    
                                <ListItemDeleteAction onPress={()=>{handleDelete(item);}}/>)
                            }
                        />
                    }
                    ItemSeparatorComponent={()=>
                        <ListItemSeperator/>}
                    refreshing = {refreshing}
                    onRefresh = {()=>{
                        setMessages(messages);
                    }}
                />
            </Screen>
        );
 
}

const styles = StyleSheet.create({
    input:{
        height: 50,
        paddingLeft: 6,
    }
});  
export default MessagesScreen;