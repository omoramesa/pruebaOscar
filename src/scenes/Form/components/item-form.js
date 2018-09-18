import React from 'react';
import { Text, StyleSheet, Button,ScrollView,TextInput,Switch } from 'react-native';

const ItemForm = (props) => (

    <ScrollView style={styles.formWrapper}>

        <Text style={styles.formLabel}> Nombre</Text>
        <TextInput
            placeholder='Ingrese el nombre'
            style={styles.formInput}
            value={props.form.name}
            onChangeText={props.onChangeText}
        />
        <Text style={styles.formLabel}> Correo Electrónico</Text>
        <TextInput
            placeholder='Ingrese el correo electrónico'
            style={styles.formInput}
            value={props.form.email}
        />
        <Text style={styles.formLabel}> Teléfono</Text>
        <TextInput
            placeholder='Ingrese el teléfono'
            style={styles.formInput}
            value={props.form.phone}
        />
        <Text style={styles.formLabel}> Dirección</Text>
        <TextInput
            placeholder='Ingrese la dirección'
            style={styles.formInput}
            value={props.form.adress}
        />        
        <Button 
            title="Finalizar"
            onPress={() => { props.navigation.navigate('FinalizeScreen') }}
            color='#19A311'
        />
    </ScrollView>
);

const styles = StyleSheet.create({
    formWrapper: {
        marginHorizontal: 25,
    },
    formLabel: {
        color: '#19A311',
        marginVertical: 5,
    },
    

});
export default ItemForm;
