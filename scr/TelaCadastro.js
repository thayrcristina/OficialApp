import React from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';





export default class TelaCadastro extends React.Component {


    render() {
        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


                <Text style={styles.tituloCad}>Informações Pessoais</Text>

                <Text style={styles.textoCad}>Nome</Text>
                <TextInput
                    style={styles.inputCadastro}
                    placeholder={"Nome"} />


                <Text style={styles.textoCad}>Email</Text>
                <TextInput
                    style={styles.inputCadastro}
                    placeholder={"Email"} 
                    />

                <Text style={styles.textoCad}>Senha</Text>
                <TextInput
                    style={styles.inputCadastro}
                    placeholder={"Senha"}
                     />
                    
                <Text style={styles.tituloInformacoes}>Mais Informações</Text>
                <Text style={styles.textoObs}>Nessa parte, você adicionára as informações de 5 contatos para ficarem cadastrado.
            Esses contatos serão notificados quando o botão de panico for acionado. Lembre-se de adicionar contatos de sua confiança!</Text>

                <Text style={styles.textoInput}>Contato 1</Text>
                <TextInput
                    style={styles.inputContato}
                    placeholder={"Contato 1"} />

                <Text style={styles.textoInput}>Contato 2</Text>
                <TextInput
                    style={styles.inputContato}
                    placeholder={"Contato 2"} />


                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}  >Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    tituloCad: {
        padding: 10,
        top: -80,
        color: '#ef3f67',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },


    tituloInformacoes: {
        padding: 10,
        top: 5,
        color: "#ef3f67",
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',

    },
    textoObs: {
        fontSize: 10,
        color: 'black',
        alignSelf: 'center'
    },
    textoCad: {
        padding: 2,
        top: -70,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'auto',

    },

    textoInput: {
        padding: 2,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'auto',

    },
    inputContato: {
        padding: 1,
        width: 250,
        fontSize: 10,
        color: 'black',
        alignSelf: 'auto',
        borderBottomWidth: 1,
        borderColor: "#a9a9a9",

    },
    inputCadastro: {
        width: 250,
        top: -70,
        fontSize: 10,
        color: 'black',
        alignSelf: 'auto',
        borderBottomWidth: 1,
        borderColor: "#a9a9a9",

    },

    botao: {
        top: 8,
        width: 125,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ef3f67",
        borderRadius: 10

    },

    textoBotao: {
        color: '#ef3f67',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },



});

