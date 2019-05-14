import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

  KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class TelaPublicacoes extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = 'Publicações';
    let headerTitleStyle = { color: 'white' };
    let headerStyle = { backgroundColor: '#df2950' };


    return { headerTitle, headerTitleStyle, headerStyle }

  }

  render() {
    return (



      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       
        
       

        <Text style={styles.title}> Postagens </Text>

        <Image style={styles.icon1}
          source={require('../assets/icon-publicacao.png')} />

        <TextInput
          style={styles.inputPublicacao}
          placeholder={"Escreva sua publicação..."} />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Publicar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>




    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  
  icon: {
    width: 45,
    height: 45,

  },
  title: {
    padding: 10,
    marginBottom: 20,
    color: '#E90B37',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'stretch'
  },

  icon1: {
    width: 50,
    height: 50,
    right: -55,
    top: 300,
    borderWidth: 1,
    borderColor: '#ef3f67',
    alignSelf: 'flex-start'

  },

  inputPublicacao: {
    borderWidth: 1,
    width: 250,
    top: 250,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ef3f67",
    alignSelf: 'flex-end'

  },

  botao: {
    top: 250,
    width: 125,
    backgroundColor: '#ef3f67',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ef3f67',
    borderRadius: 4,
    alignSelf: 'flex-end'
  },

  textoBotao: {
    fontSize: 15,
    color: "white",
    fontWeight: 'bold',
    alignSelf: 'center'

  }
});
