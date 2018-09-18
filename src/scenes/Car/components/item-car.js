import React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';

const ItemCar = (props) => (

    <View style={styles.container}>
        <View>
            <Text style={styles.productName}>{props.car.description}</Text>
            <Image
                style={styles.image}
                source={{ uri: props.car.image }}
            />
        </View>
        <View style={styles.content}>
            <Text>Precio: {props.car.price}</Text> 
           
            <Button
                color='#008000'
                title="Comprar"
                onPress={() => { props.navigation.navigate('FormScreen') }}//No se utiliza this.props ya que es una función
            />
        </View>
</View>



);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },    
    image: {
        width: 170,
        height: 170,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    productName: {
        fontSize: 24,
        fontWeight: '200',
    }

});
export default ItemCar;
