import React from 'react';
import {
    Text,
    Image,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';




import { TextInput } from 'react-native-gesture-handler';
import { } from 'react-navigation';

export default class TelaOng extends React.Component {
    static navigationOptions = ({ }) => {
        let headerTitle = 'Ongs';
        let headerTitleStyle = { color: 'white' };
        let headerStyle = { backgroundColor: '#df2950' };

        return { headerTitle, headerTitleStyle, headerStyle }
    }

    render() {
        return (

            <ScrollView style={styles.container}>

                <View style={styles.containerCard}>
                    <Image source={require('../assets/ong-1.jpg')} style={styles.image} />
                    <Text style={styles.tituloCard}> Juntas </Text>
                    <Text style={styles.textDesc}> BLALSLBLSDPFLS NLAPGPSLPLBaBLPALFPALNPLVPAA</Text>
                    <TouchableOpacity style={styles.inputOng}>
                        <Text style={styles.textoInput}>Contactar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard2}>
                    <Image source={require('../assets/ong-2.jpg')} style={styles.image} />
                    <Text style={styles.tituloCard}> Juntas </Text>
                    <Text style={styles.textDesc}> BLALSLBLSDPFLS NLAPGPSLPLBaBLPALFPALNPLVPAA</Text>
                    <TouchableOpacity style={styles.inputOng}>
                        <Text style={styles.textoInput}>Contactar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard3}>
                    <Image source={require('../assets/ong-3.jpg')} style={styles.image} />
                    <Text style={styles.tituloCard}> Juntas </Text>
                    <Text style={styles.textDesc}> BLALSLBLSDPFLS NLAPGPSLPLBaBLPALFPALNPLVPAA</Text>
                    <TouchableOpacity style={styles.inputOng}>
                        <Text style={styles.textoInput}>Contactar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard4}>
                    <Image source={require('../assets/ong-4.jpg')} style={styles.image} />
                    <Text style={styles.tituloCard}> Juntas </Text>
                    <Text style={styles.textDesc}> BLALSLBLSDPFLS NLAPGPSLPLBaBLPALFPALNPLVPAA</Text>
                    <TouchableOpacity style={styles.inputOng}>
                        <Text style={styles.textoInput}>Contactar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },

    containerCard: {
        top: 10,
        width: 170,
        height: 300,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'

    },

    containerCard2: {
        top: -290,
        width: 170,
        height: 300,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'

    },

    containerCard3: {
        top: -250,
        width: 170,
        height: 300,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'

    },

    containerCard4: {
        top: -550,
        width: 170,
        height: 300,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'

    },

    image: {
        top: -13,
        width: 155,
        height: 120
    },

    tituloCard: {
        top: -15,
        padding: 5,
        marginBottom: 20,
        color: '#E90B37',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    inputOng: {
        padding: 10,
        top: 12,
        backgroundColor: '#ef3f67',
        borderWidth: 1,
        borderColor: '#ef3f67',
        borderRadius: 4,
        alignSelf: 'flex-start'
    },

    textoInput: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    textDesc: {
        top: -25
    }
});
