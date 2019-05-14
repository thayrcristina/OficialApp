import React from 'react';


import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image

} from 'react-native';
import { Button } from 'react-native-elements';

export default class TelaInicial extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Inicio';
        let headerTitleStyle = { color: 'white' };
        let headerStyle = { backgroundColor: '#df2950' };
        let headerLeft = null;


        return { headerTitle, headerTitleStyle, headerStyle, headerLeft }

    }

    render() {
        return (

            <View style={styles.conteiner}>


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
        
        



    },
    menu: {    
        
        borderColor: '#a5a4a4',
        borderWidth: 2,
        flexDirection: 'row',       
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'flex-end'
        //top: 510,
        
        
    },

    icon: {
        width: 45,
        height: 45,
        



    },
    
});