import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textoPrincipal:{
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    digitarCep:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewInput:{
        flex: 8,
        padding: 5,
    },
    viewBtn:{
        flex: 2,
        padding: 5,
    },
    inputCep:{
        backgroundColor: '#0984e3',
        padding: 8,
        borderRadius: 3,
        height: 50,
        color: '#fff'
    },
    btnCep:{
        backgroundColor: '#00b894',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: 50,
    },
    btnLimpar:{
        backgroundColor: '#f53b57',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: 50,
    },
    resultados:{
        padding: 4,
    },
    res:{
        padding: 8,
        borderRadius: 1,
        marginTop: 6,
        backgroundColor: '#0984e3',
        borderRadius: 3,
        paddingLeft: 10,
        color: '#fff',
        fontWeight: '500'
    }
})

export {styles}