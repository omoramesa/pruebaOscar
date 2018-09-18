import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const ItemDetail = (props) => (
    <View>
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.detail.image }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.contactName}>{props.detail.description}</Text>
                <Text>{props.detail.quantity}</Text>
                <Text>{props.detail.price}</Text>
            </View>
        </View>
        <View>
            <View style={styles.specifications}>
                <Button
                    color='#008000'
                    title="Agregar a la Canasta"
                    onPress={() => { props.navigation.navigate('CarScreen') }}
                />
            </View>
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
        width: 200,
        height: 200,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    },
    contactTitulo: {
        fontSize: 24,
        fontWeight: '200',
    },
    detalle: {
        flexDirection: 'column',
        justifyContent: 'center',

    },

});
export default ItemDetail;
