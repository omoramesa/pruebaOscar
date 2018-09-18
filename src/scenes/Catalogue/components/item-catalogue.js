import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemCatalogue = (props) => (
    <TouchableHighlight 
        onPress={( )=> props.navigation.navigate('DetailScreen')}
        underlayColor="#ccc"  
    >
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    source={{ uri: props.catalogue.image}}
                />           
            </View>
            <View style={styles.content}>
                <Text style={styles.productName}>{props.catalogue.description}</Text>
                <Text>{props.catalogue.price}</Text>
            </View>
        </View>
    </TouchableHighlight>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    productName:{
        fontSize: 24,
        fontWeight: '200',
    }

});
export default ItemCatalogue;
