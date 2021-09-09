import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AppText from '../components/AppText';

const locations = [

    {
        index:1,
        latitude: 52.5078788,
        longitude: -1.0877321,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    },
    {
        index:2,
        latitude: 12.5078788,
        longitude: -12.0877321,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    },
    {
        index:3,
        latitude: 11.5078788,
        longitude: -11.0877321,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    },
    {
        index:4,
        latitude: 5.5078788,
        longitude: -11.0877321,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }

];

export default function DeviceOnMapScreen(props) {
    
    return (
        <View style={styles.container}>
            <AppText style={{justifyContent:'center',alignItems:'center',color:'#636363'}} children="Device Map" />
            <MapView
            style = {styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            
        {
            locations.map(
                (marker)=>(
                    <Marker
                    key={marker.index}
                    coordinate={{
                        latitude:marker.latitude,
                        longitude: marker.longitude
                    }}
                    
                    />

                    

                )
            )
        } 

{/* <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} /> */}
    </MapView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-200,

    },
});