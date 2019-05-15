import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image

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
                        source={require('../assets/logo.png')} />
                </TouchableOpacity>


                <View style={styles.menu} >

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

    menu: {
        borderColor: '#a5a4a4',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        top: 340,


    },

    icon: {
        width: 45,
        height: 45,
    },


    logo: {
        margin: 20,
        width: 130,
        height: 130,
        alignSelf: 'auto',

   },
});