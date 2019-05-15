import React from 'react';
import {
    View,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import firebase from 'firebase';


export default class TelaLogin extends React.Component {
    static navigationOptions = ({ }) => {
        let headerTitle = 'Login';
        let headerTitleStyle = { color: 'white' };
        let headerStyle = { backgroundColor: '#ef3f67' };

        return { headerTitle, headerTitleStyle, headerStyle }
    }

    state = {
        email: '',
        senha: '',
        isAuthenticated: false,
    };

    login = async () => {
        const { email, senha } = this.state;


        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, senha);
            this.setState({ isAuthenticated: true });
            console.log(user);
        } catch (eerr) {
            console.log(err);
        }
        this.props.navigation.navigate("Inicio")
    }

    render() {
        return (

            <View style={styles.container} >

                <Image style={styles.logo}
                    source={require('../assets/logo.png')} />

                <Text style={styles.textoInput}>Digite seu usuário e senha para acessar!</Text>
                <TextInput
                    style={styles.inputAcesso}
                    placeholder={"Usuário"}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput
                    style={styles.inputAcesso}
                    placeholder={"Senha"}
                    value={this.state.senha}
                    onChangeText={senha => this.setState({ senha })} />

                <TouchableOpacity style={styles.botao} onPress={this.login}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastro}
                    onPress={() => this.props.navigation.navigate("Cadastro")}>
                    <Text style={styles.textoCadastro}>Não tem conta? Cadastre-se aqui!</Text>
                </TouchableOpacity>

            </View >

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

    inputAcesso: {
        top: -5,
        width: 250,
        margin: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 2
    },

    botao: {
        top: 8,
        width: 250,
        backgroundColor: "#ef3f67",
        borderWidth: 1,
        borderRadius: 8
    },

    cadastro: {
        top: 15,
        width: 250,

    },

    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoCadastro: {
        padding: 10,
        top: 10,
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoCadAqui: {
        top: 10,
        color: '#ef3f67',
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoInput: {
        top: -10,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoFacebook: {
        top: 55,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    botaoFacebook: {
        top: 30

    },
    logo: {
        alignSelf: 'center',
        top: -50,
        width: 110,
        height: 110

    }
});