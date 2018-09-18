import React, { Component } from 'react';

import { View, Text, FlatList} from 'react-native';
import ItemForm from './components/item-form';


class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            form: {}
        };
    }

    componentDidMount= ()=>{
        const form = 
            {
                name: 'Oscar Mora Mesa',
                email: 'oscar.mora@gmail.com',
                phone: '4562345',
                adress: 'Cra 45A # 12-34 Medellín, Colombia'
            };

        this.setState({
            form
        });
    };

    static navigationOptions = {
        title: 'Formulario',
    }

    

    render() {
        return (
            <View>               
                <ItemForm form={this.state.form} navigation={ this.props.navigation } /> 
            </View>
        );
    }
}

export default Form;