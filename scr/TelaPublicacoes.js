import React from 'react';
import firebase from 'firebase';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity

} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class TelaPublicacoes extends React.Component {

  static propTypes = {
    publicacao: PropTypes.array.isRequired
  };

  static navigationOptions = ({ }) => {
    let headerTitle = 'Publicações';
    let headerTitleStyle = { color: 'white' };
    let headerStyle = { backgroundColor: '#df2950' };

    return { headerTitle, headerTitleStyle, headerStyle }
  }

  constructor() {
    super();
    this.state = {
      publicacao: '',
    }
  };


  Publicacoes() {
    firebase.database().ref('Publicacoes').push({
      publicacao: this.state.publicacao,
    });
    alert("Publicação realizada com sucesso!");
  }


  componentDidMount() {
    firebase.database().ref('Publicacoes').on('value', (snapshot) => {
      publicacao = snapshot.val();
      this.setState({ publicacao : publicacao });

    });
  }
  render() {

    return (

      <View style={styles.container} >

        <TouchableOpacity style={styles.title}
          onPress={() => this.props.navigation.navigate("Publicacao")}>
          <Text style={styles.title}>Postagens</Text>
        </TouchableOpacity>


        <View style={styles.publicadas}>


          {

            Object.keys(this.state.publicacao)
              ? Object.keys(this.state.publicacao).map(publicacaoId => (
                <Text key={publicacaoId}>
                  {this.state.publicacao[publicacaoId]}
                </Text>
              ))
              : <Text> Não há publicações! </Text>
          }


        </View>

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
      </View>

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
  publicadas: {
    backgroundColor: '#F5F5F5',
    top: 150,
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
