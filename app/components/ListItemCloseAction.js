import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
function ListItemCloseAction(props) {
    return (
        <View style = {styles.container}>
           <MaterialCommunityIcons name="close" color="white" size = {35}></MaterialCommunityIcons>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.medium,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderRadius: 20

    }
});
export default ListItemCloseAction;