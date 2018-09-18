import React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';

const ItemFinalizado = (props) => (
    <View>
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.finalize.image }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.productName}>{props.finalize.gracias}</Text>
              
            </View>
        </View>
        <View>
           
            <View>
            <Button
                    color='#008000'
                    title="Realizar Otra compra"
                    onPress={() => { props.navigation.navigate('CatalogueScreen') }}
                />
                </View>
        </View>
    </View>

);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    productName: {
        fontSize: 24,
        fontWeight: '200',

    },
    mensajeText: {
        fontSize: 30,
        fontWeight: '200',
        justifyContent: 'center',
        color: '#0BB33B'
    },
    mensaje: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});
export default ItemFinalizado;
