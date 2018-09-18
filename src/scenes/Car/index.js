import React, { Component } from 'react';

import { View} from 'react-native';
import ItemCar from './components/item-car';


class Car extends Component {

    constructor(props){
        super(props);
        this.state={
            car: {}
        };
    }

    componentDidMount= ()=>{
        const car = 
            {
                description: 'Reloj S-Shock 1029 Negro ',
                quantity:'3',
                price: '$650.000',
                image: 'https://dafitistaticco-a.akamaihd.net/p/vintage-accessories-0314-135628-1-product.jpg',
            };

        this.setState({
            car
        });
    };

    static navigationOptions = {
        title: 'Carro',
    }
    
    render() {
        return (
            <View>               
                <ItemCar car={this.state.car} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Car;