import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
function Screen(props) {
    return (
        <View style = {styles.screen}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex:1
    }
});
export default Screen;