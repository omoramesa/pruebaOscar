import React, { Component } from 'react';

import { View, Text, FlatList} from 'react-native';
import ItemFinalize from './components/item-finalizado';


class Finalize extends Component {

    constructor(props){
        super(props);
        this.state={
            finalize: {}
        };
    }

    componentDidMount= ()=>{
        const finalize = 
            { 
                image: 'https://png.pngtree.com/element_pic/17/02/11/8b8d7546e36082e05d432da3316b3e48.jpg',
                gracias: 'Gracias por su compra',
               
            };

        this.setState({
            finalize
        });
    };

    static navigationOptions = {
        title: 'Finalizado',
    }
    

    render() {
        return (
            <View>                               
                <ItemFinalize finalize={this.state.finalize} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Finalize;