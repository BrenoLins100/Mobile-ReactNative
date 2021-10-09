import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textoPrincipal:{
        marginTop: 15,
        padding: 15,
        fontSize: 30,
        textAlign: 'center'
    },
    viewImage:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemDev:{
        width:200,
        height:200,
        resizeMode: 'contain'
    },
    viewEntrada:{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPerfil:{
        borderWidth: 2,
        borderColor: '#222',
        flex: 9,
        height: 50,
        borderRadius: 3,
        marginRight: 4,
        paddingLeft: 10
    },
    btnPesquisa:{
        flex: 2,
        backgroundColor: '#2980b9',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    btnLimpar:{
        flex: 2,
        backgroundColor: '#e74c3c',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 3
    },
    viewResultados:{
        padding: 20
    },
    dados:{
        padding: 10,
        marginTop: 6,
        backgroundColor: '#27ae60',
        borderRadius: 3,
        color: '#fff',
    }
})

export {styles};