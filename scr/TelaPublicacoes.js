import React from 'react';
import firebase from 'firebase';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';




export default class TelaPublicacoes extends React.Component {

  static navigationOptions = ({ }) => {
    let headerTitle = 'Publicações';
    let headerTitleStyle = { color: 'white' };
    let headerStyle = { backgroundColor: '#df2950' };

    return { headerTitle, headerTitleStyle, headerStyle }
  }

  constructor(props) {
    super(props);
    this.state = {
        publicacao: '', 
    };
  }

    Publicacoes() {
      firebase.database().ref('Publicacoes').set({
         publicacao: this.state.publicacao, 
      });
      alert("Publicação reallizada com sucesso!");
    }
  
    listarPub() {
      fireabase.database().ref('Publicacoes').on('value', (snapshot) => {
        this.setState({ publicacoes: snapshot.val() }); 
        
            }); 
          }
           componentDidMount(){
             this.listarPub();

           }
    

    

  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <Text style={styles.title}> Postagens </Text>

      <FlatList style={styles.listaPub}>
        {Object.keys(this.state.publicacoes).map(publicacaoId => {this.state.publicacoes[publicacaoId]})}    
      
      
      
      </FlatList>
       

        <Image style={styles.icon1}
          source={require('../assets/icon-publicacao.png')} />

       
        <TextInput
          style={styles.inputPublicacao}
          placeholder={"Escreva sua publicação..."}
          onChangeText={(publicacao) => this.setState({ publicacao })}
          value={this.publicacao} />

        <TouchableOpacity style={styles.botao} 
        onPress={() => { this.Publicacoes(this.publicacao);}}>
          <Text style={styles.textoBotao}>Publicar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView >

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
