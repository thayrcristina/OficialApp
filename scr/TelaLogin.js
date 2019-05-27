import React from 'react';
import {
    View,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    Image,  
    KeyboardAvoidingView,
    
  
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



            <KeyboardAvoidingView style={styles.container} behavior="padding" >
        
        <View style={styles.login}>

                <Image style={styles.logo}
                    source={require('../assets/logo.png')} />
                <Text style={styles.textoInput}>Email</Text>
                <TextInput
                    style={styles.inputAcesso}
                    placeholder={"email@dominio.com"}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />

                <Text style={styles.textoInput}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
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
                </View>
                </KeyboardAvoidingView>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 1,
        flex: 1,
        backgroundColor: '#ef3f67',
        alignItems: 'center',
        justifyContent: 'center'
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

    inputAcesso: {
        width: 290,
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

    botao: {
        // top: 8,
        width: 290,
        padding: 10,
        margin: 10,
        backgroundColor: "#ef3f67",
        borderWidth: 1,
        borderColor: "#ef3f67",
        borderRadius: 4
    },

    cadastro: {
        // top: 15,
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
        // top: 10,
        color: '#ef3f67',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoCadAqui: {
        // top: 10,
        color: '#ef3f67',
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textoInput: {
        // top: -10,
        margin: 10,
        fontSize: 15,
        color: '#ef3f67',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },

    textoFacebook: {
        // top: 55,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    botaoFacebook: {
        top: 30

    },
    logo: {
        margin: 10,
        alignSelf: 'center',
        width: 110,
        height: 110

    }
});