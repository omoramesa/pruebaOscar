import React, { Component } from 'react';

import { View, Text, Button,FlatList} from 'react-native';
import ItemCatalogue from './components/item-catalogue';
import ItemSeparator from './components/item-separator';

class Catalogue extends Component {

    constructor(props){
        super(props);
        this.state={
            catalogueList: []
        };
    }

    componentDidMount= ()=>{
        const catalogue = [
            {
                description: 'Reloj Casio MTP-V300D-1A-Gris',
                quantity:'3',
                price: '$830.000',
                image: 'https://dafitistaticco-a.akamaihd.net/p/casio-5511-335288-1-product.jpg',
                id: 1
            },
            {
                description: 'Reloj S-Shock 1029 Negro ',
                quantity:'3',
                price: '$650.000',
                image: 'https://dafitistaticco-a.akamaihd.net/p/vintage-accessories-0314-135628-1-product.jpg',
                id: 2
            }
           
        ];

        this.setState({
            catalogueList: catalogue
        });
    };

    static navigationOptions = {
        title: 'Catalogo',
    }
    
    renderItem=({item}) => <ItemCatalogue navigation={this.props.navigation} catalogue={item} />
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay productos</Text> 
    keyExtractor=item => item.id.toString()

    render() {
        return (
            <View>               
                {/*Creacion de lista*/}
                <FlatList
                    data={this.state.catalogueList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />

            </View>
        );
    }
}

export default Catalogue;