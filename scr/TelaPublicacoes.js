import React from 'react';
import firebase from 'firebase';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView


} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class TelaPublicacoes extends React.Component {

  constructor() {
    super();
    this.state = {
      publicacao: [],
      publicadas: null

    };
  }

  static navigationOptions = ({ }) => {
    let headerTitle = 'Publicações';
    let headerTitleStyle = { color: 'white' };
    let headerStyle = { backgroundColor: '#ef3f67' };

    return { headerTitle, headerTitleStyle, headerStyle }
  }

  Publicacoes() {
    firebase.database().ref('Publicacoes').push({
      publicacao: this.state.publicacao,
    });
    alert("Publicação realizada com sucesso!");
  };

  // listarPub(){
  //   const publicadas = fireabase.database().ref('Publicacoes');
  //   publicadas.on('value', (snapshot) => {
  //     this.setState({publicadas: snapshot.val()});   
  //       });
  // }
  //  render() {

  componentDidMount() {
    if (!this.state.publicadas) {
      const publicadas = firebase.database().ref('Publicacoes').child('publicacao');
      publicadas.on('value', (snapshot) => {
        this.setState({ publicadas: snapshot.val() });
      })
      console.log(publicadas.on('value', (snapshot) => {
        this.setState({ publicadas: snapshot.val() });
      }));
    }
  }
  render() {
    const { publicadas } = this.state


    return (

      <View style={styles.container} >

        <TouchableOpacity style={styles.title}
          onPress={() => this.props.navigation.navigate("Publicacao")}>
          <Text style={styles.title}>Postagens</Text>
        </TouchableOpacity>


        <View style={styles.publicadas}>
          {

            publicadas &&
            <Text>{publicadas.publicacao}</Text> //AQUI VAI CORRESPONDER AO VALOR DA PROPRIEDADE DO OBJETO QUE VOCE DESEJA MOSTRAR
          }
        </View >

        {/* {
                Object.keys(this.state.publicacao).length > 0
                  ? Object.keys(this.state.publicacao).map(pub => (
                    <Text key={pub}>
                      {this.state.publicacao[pub]}
                    </Text>
                  ))
                  : <Text> Não há publicações! </Text>
              }  */}





        <KeyboardAvoidingView style={styles.publicacoes} behavior="padding" >


          <Image style={styles.icon1}
            source={require('../assets/icon-publicacao.png')} />

          <TextInput

            style={styles.inputPublicacao}
            placeholder={"Escreva sua publicação..."}
            onChangeText={(publicacao) => this.setState({ publicacao })}
            value={this.publicacao} />

          <TouchableOpacity style={styles.botao}
            onPress={() => { this.Publicacoes(this.publicacao); }}>
            <Text style={styles.textoBotao}>Publicar</Text>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
          </KeyboardAvoidingView>
        </View>



    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
  },

  icon: {
    width: 45,
    height: 45,
  },
  publicadas: {
    backgroundColor: '#ef3f67',
    // top: 150,
  },

  publicacoes: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'column',
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
    // padding: 20,
    // margin: 10,
    top: 70,
    width: 70,
    height: 70,
    // right: -55,
    // top: 300,
    borderWidth: 1,
    borderColor: '#ef3f67',
    alignSelf: 'flex-start'
  },

  inputPublicacao: {
    padding: 20,
    // margin: 10,
    borderWidth: 1,
    width: 258,
    // borderBottomWidth: 1,
    borderColor: "#ef3f67",
    alignContent: 'flex-end',

  },

  botao: {
    // margin: 10,    
    marginTop: 10,
    padding: 10,
    width: 125,
    backgroundColor: '#ef3f67',
    borderWidth: 1,
    borderColor: '#ef3f67',
    borderRadius: 4,
    alignContent: 'flex-end',
  },

  textoBotao: {
    fontSize: 15,
    color: "white",
    fontWeight: 'bold',
    alignSelf: 'center'
  }

});
