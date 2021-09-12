import {StyleSheet} from 'react-native';

let cor = '#bdc3c7';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222',
        padding:20,
        fontWeight: 'bold'

    },
    anuncio:{
        margin: 10,
        width: 220,
        height:210,
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
    },
    imagem:{
        backgroundColor: cor,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 3,
    },
    titulo:{
        marginTop: 20,
        color: '#f39c12',
        fontSize: 18,  
     },
    preco:{
        color: '#919191',
        fontSize: 14,
        marginTop: 20
    }
})

export {styles};