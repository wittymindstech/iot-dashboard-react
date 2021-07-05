import React, { useState} from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemAddAction from '../components/ListItemAddAction';
import uuid from 'react-native-uuid';
import colors from '../config/colors';
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

function MessagesScreen(props) {
    //var val = 3;
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
            
            <ListItemAddAction style={{width:35, height:35, alignItems:'flex-end'}} onPress={()=>{handleAdd({id: uuid.v4(), title: 'NewDevice', description: 'New place', image: require('../assets/profile-photo.png')});}}/>

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
    
});  
export default MessagesScreen;