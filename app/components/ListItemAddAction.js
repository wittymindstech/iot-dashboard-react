import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
function ListItemAddAction({onPress}) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style = {styles.container}>
            <MaterialCommunityIcons name="plus-box" color="white" size = {35}></MaterialCommunityIcons>
            </View>
        </TouchableNativeFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.safe,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        borderRadius: 20

    }
});
export default ListItemAddAction;