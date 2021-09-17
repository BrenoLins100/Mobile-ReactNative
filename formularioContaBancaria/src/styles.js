import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textoPrincipal:{
        fontSize: 30,
        fontFamily: 'Urbanist',
        padding: 10,
        textAlign: 'center'
    },
    mostraTexto:{
        fontSize: 27,
        fontFamily: 'Urbanist',
        paddingTop: 20,
        textAlign: 'left'  
    },
    dados:{
        marginTop: 50,
        padding: 20
    },
    selecionar:{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 20,
    },
    picker:{
        flex: 1,
       
    },
    textoPicker:{
        flex: 1
    },
    limite:{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    slider:{
        flex: 5.2
    },
    textoLimite:{
        flex: 1
    },
    formata:{
        fontFamily: 'Urbanist',
        color: '#222',
        fontSize: 18,
    },
    input:{
        borderWidth: 1,
        borderColor: '#4b4b4b',
        padding: 5,
        marginTop: 6,
        borderRadius: 3
    },
    btn:{
        marginTop: 10,
        padding: 10,
        backgroundColor: '#3ae374',
        borderRadius: 3
    }
})

export {styles}