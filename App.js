import React  from 'react';
import firebase from 'firebase';

import {createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

import TelaLogin from './scr/TelaLogin';
import TelaCadastro from './scr/TelaCadastro'; 
import TelaPublicacoes from './scr/TelaPublicacoes';
import TelaInicial from './scr/TelaInicial,'; 
import TelaOng from './scr/TelaOng';


{
  var firebaseConfig = {
    apiKey: "AIzaSyBYkFtzcLsq2vjOKUh0c0hAHTJJ3nH0TfA",
    authDomain: "oficialapp-ad7a0.firebaseapp.com",
    databaseURL: "https://oficialapp-ad7a0.firebaseio.com",
    projectId: "oficialapp-ad7a0",
    storageBucket: "oficialapp-ad7a0.appspot.com",
    messagingSenderId: "882214950502",
    appId: "1:882214950502:web:8e0bff96e3f2da3f"
  }

firebase.initializeApp(firebaseConfig);
};



const AppNavigator = createStackNavigator({

  //Login: {screen:TelaLogin},
  //Cadastro: {screen:TelaCadastro},
  Inicio: {screen: TelaInicial},
  Publicacoes: {screen: TelaPublicacoes},
  Ong: {screen: TelaOng}

  });

 

export default createAppContainer(AppNavigator);

