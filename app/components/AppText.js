import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';


function AppText({children, style}) {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto": "Avenir",
        ...Platform.select({
            ios: {
        
                fontSize: 18,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
});



export default AppText;