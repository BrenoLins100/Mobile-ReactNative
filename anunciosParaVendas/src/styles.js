import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ebeaef',
        padding:20,
        fontWeight: 'bold',
    },
    anuncio:{
        margin: 10,
        width: 200,
        height: 230,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    imagem:{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 3,
    },
    titulo:{
        marginTop: 20,
        color: '#222',
        fontSize: 18,
        fontFamily: 'Urbanist',
        marginLeft: 10 
     },
    preco:{
        color: '#131313',
        fontSize: 14.5,
        marginTop: 20,
        fontFamily: 'Urbanist-Bold',
        marginLeft: 10   

    }
})

export {styles};