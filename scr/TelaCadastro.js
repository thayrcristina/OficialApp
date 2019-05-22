import React from 'react';
import firebase from 'firebase';
import TelaPublicacoes from '../scr/TelaPublicacoes'

import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native';

export default class TelaCadastro extends React.Component {
    static navigationOptions = ({ }) => {
        let headerTitle = 'Cadastro';
        let headerTitleStyle = { color: 'white' };
        let headerStyle = { backgroundColor: '#ef3f67' };
        //let headerLeft = null; 

        return { headerTitle, headerTitleStyle, headerStyle }
    }

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            contato1: '',
            contato2: '',
        };

        this.cadastrologin = this.cadastrologin.bind(this);
        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('Usuarios').child(user.uid).set({
                    // email: this.state.email,
                    // senha: this.state.senha,
                    nome: this.state.nome,
                    contato1: this.state.contato1,
                    contato2: this.state.contato2
                });
                alert("Conta Criada com Sucesso!");

                this.props.navigation.navigate("Inicio")
            }
        });
    }
    cadastrologin() {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            alert(error.code);
        }

        )
    }
   
    render() {
        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" >

                <View style={styles.login}>

                    <Text style={styles.tituloCad}>Login</Text>

                    {/* <Text style={styles.textoCad}>Nome</Text> */}
                    <TextInput
                        style={styles.inputCadastro}
                        placeholder={"Nome"}
                        onChangeText={(nome) => this.setState({ nome })}
                        value={this.nome}
                    />

                    {/* <Text style={styles.textoCad}>Email</Text> */}
                    <TextInput
                        style={styles.inputCadastro}
                        placeholder={"Email"}
                        onChangeText={email => this.setState({ email })} 
                        onFocus={this.focus} 
                        value={this.email}
                    />

                    {/* <Text style={styles.textoCad}>Senha</Text> */}
                    <TextInput
                        style={styles.inputCadastro}
                        placeholder={"Senha"}
                        onChangeText={senha => this.setState({ senha })}
                        value={this.senha}
                    />
                {/* </View> */}

                {/* <View style={styles.info}> */}


                    <Text style={styles.tituloCad}>Contatos</Text>
                    {/* <Text style={styles.textoObs}>Nessa parte, você adicionára as informações de 5 contatos para ficarem cadastrado. */}
            {/* Esses contatos serão notificados quando o botão de panico for acionado. Lembre-se de adicionar contatos de sua confiança!</Text> */}

                    {/* <Text style={styles.textoInput}>Contato 1</Text> */}
                    <TextInput
                        style={styles.inputContato}
                        placeholder={"Contato 1"}
                        onChangeText={contato1 => this.setState({ contato1 })}
                        value={this.contato2} />

                    {/* <Text style={styles.textoInput}>Contato 2</Text> */}
                    <TextInput
                        style={styles.inputContato}
                        placeholder={"Contato 2"}
                        onChangeText={contato2 => this.setState({ contato2 })}
                        value={this.contato2} />

                    <TouchableOpacity style={styles.botao}
                        onPress={() => { this.cadastrologin(this.nome, this.email, this.senha, this.contato1, this.contato2); }}>
                        <Text style={styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>                   
                   
                    </View>

            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: '#ef3f67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    focus:
    {

    }, 
    login: {
        // padding: 10,
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // width: 310,     
        // height: 350,   
        borderWidth: 1,
        borderColor: '#ffdde5',
        borderRadius: 4,
        justifyContent: 'center'
    },

    // info: {
    //     // padding: 30,
    //     // flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     // width: 310,     
    //     // height: 350,   
    //     justifyContent: 'center'
    // },

    tituloCad: {     
        margin: 10,
        color: '#ef3f67',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
        // alignSelf: 'flex-start',
    },

    // tituloInformacoes: {
    //     padding: 10,
    //     // top: 5,
    //     color: "#ef3f67",
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     alignSelf: 'center',
    // },

    textoObs: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center'
    },
    textoCad: {

        padding: 2,
        // top: -70,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'flex-start',

    },

    textoInput: {
        padding: 2,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'auto',

    },
    inputContato: {
        width: 300,
        padding: 10,
        margin: 10,
        // top: -70,
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "#ef3f67",
        borderRadius: 4

    },
    inputCadastro: {
        width: 300,
        // top: -70,
        fontSize: 15,
        padding: 10,
        margin: 10,
        color: 'black',
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: "#ef3f67",
        borderRadius: 4

    },

    botao: {
        // top: 8,
        width: 300,
        padding: 10,
        margin: 10,
        backgroundColor: "#ef3f67",
        borderWidth: 1,
        borderColor: "#ef3f67",
        borderRadius: 4
        

    },

    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },



});

