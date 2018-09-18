import React, { Component } from 'react';

import { View} from 'react-native';
import ItemDetail from './components/item-detail';


class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };
    }

    componentDidMount = () => {
        const detail = {

            description: 'Reloj S-Shock 1029 Negro ',
            quantity:'3',
            price: '$650.000',
            image: 'https://dafitistaticco-a.akamaihd.net/p/vintage-accessories-0314-135628-1-product.jpg',
               
        };
        

        this.setState({
            detail
            
        });
    };

    static navigationOptions = {
        title: 'Detalle',
    }
    render() {
        return (
            <View>
                <ItemDetail detail={this.state.detail} navigation={ this.props.navigation } />                  

            </View>
        );
    }
}

export default Detail;