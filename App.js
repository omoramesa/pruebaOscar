import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import { StackNavigator  } from 'react-navigation';

import Catalogue from './src/scenes/Catalogue';
import Finalize from './src/scenes/Finalize';
import Form from './src/scenes/Form'; 
import Detail from './src/scenes/Detail';
import Car from './src/scenes/Car';

const AppNavigator = StackNavigator(
  {
    CatalogueScreen: {
      screen: Catalogue,
      navigationOptions:()=>({
        title: "Catalogo"
      })
    }, 
    DetailScreen: {
      screen: Detail        
    },
     CarScreen: {
      screen: Car        
    },
    FormScreen: {
      screen: Form        
    },    
    FinalizeScreen: {
      screen: Finalize        
    }  
  },
  {
    initialRouteName: 'CatalogueScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#19A311',
        borderBottomColor: '#19A311',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: '400',
        fontSize: 25
      }
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Retorna un component
      <AppNavigator />
    );
  }
}