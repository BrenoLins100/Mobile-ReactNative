import { Jost_500Medium } from '@expo-google-fonts/jost';
import {StyleSheet} from 'react-native';
import {fontes} from './fontes'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#dfe6e9'
    },
    conversor:{
        padding: 10,
        marginTop: 40
    },
    caixaTexto:{
        backgroundColor: '#FFC312',
    },
    texto:{
        fontFamily: fontes.mr500,
        fontSize: 30,
        textAlign: 'center',
    },
    entrada:{
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    valor:{
        flex: 1,
        fontFamily: fontes.mr400,
        color: '#000'
    },
    itemPicker:{
        fontFamily: fontes.mr400,
    },
    inputUsuario:{
        flex: 8,
        borderWidth: 2,
        borderColor: '#000',
        fontFamily: fontes.mr500,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderRadius: 5,
        marginLeft: 3,
    },
    picker:{
        flex: 9,
    },
    resultado:{
        margin: 10,
        padding: 10,
        fontFamily: fontes.mr400,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 20,

    }
})

export {styles};