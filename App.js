import React from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';

function App(props) {
  return (
    <View style={{flex:1, marginTop: StatusBar.currentHeight, justifyContent: 'center', backgroundColor:'#d7dbd8'}}>
      <View style = {{backgroundColor: "blue",width: 100, height: 100}}/>

      <View style = {{backgroundColor: "grey", width: 100, height: 100}}/>
      <View style = {{backgroundColor: "green", width: 100, height: 100}}/>

    </View>
  );
}

export default App;