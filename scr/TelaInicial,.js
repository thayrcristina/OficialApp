import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    ScrollView,

} from 'react-native';
import { Button } from 'react-native-elements';

export default class TelaInicial extends React.Component {
    static navigationOptions = ({ }) => {
        let headerTitle = 'Inicio';
        let headerTitleStyle = { color: 'white' };
        let headerStyle = { backgroundColor: '#df2950' };
        let headerLeft = null;


        return { headerTitle, headerTitleStyle, headerStyle, headerLeft }

    }

    render() {
        return (

           <View style={styles.conteiner}>


                <TouchableOpacity >
                    <Image style={styles.logo}
                        source={require('../assets/botao.png')} />
                </TouchableOpacity>
                
               
                    <Text style={styles.tituloAstro}> Astrologia</Text>

                    <View style={styles.signosContent}>
                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/aquario.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/aries.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/cancer.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/capricornio.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/escorpiao.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/gemeos.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/leao.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/libra.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/sagitario.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}> 
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/touro.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/virgem.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signos}>
                        <Image style={styles.imageSignos}
                            source={require('../assets/signos/peixes.png')} />
                    </TouchableOpacity>
                   </View>

                    <View style={styles.menuContent}>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Inicio")}>
                        <Image style={styles.icon}
                            source={require('../assets/home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Publicacoes")}>
                        <Image style={styles.icon}
                            source={require('../assets/pub.png')} />
                    </TouchableOpacity>


                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Ong")}>
                        <Image style={styles.icon}
                            source={require('../assets/ongs.png')} />
                    </TouchableOpacity>
                    
                    </View>
                                                       
                    </View>
                    
                    
                    
           

        );
    };
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    menuContent: {
        // position: 'relative',
        borderColor: '#a5a4a4',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        flexWrap: 'nowrap',
        top: -1,
    },

    tituloAstro: {
        color: '#E90B37',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }, 

    icon: {
        width: 45,
        height: 45,
    },

    imageSignos: {
        width: 58,
        height: 58,
    },

    signosContent: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'space-between',
        width: 350,       
        height: 310,
        alignSelf: 'stretch'
        // backgroundColor: '#ccc'
    },

    signos: {
        
        margin: 15, 
        marginRight: 10,


    },

    logo: {
        margin: 20,
        width: 130,
        height: 130,
        alignSelf: 'center',

    },
});