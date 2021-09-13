import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7ecee',
    },
    vaga:{
        with: 300,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 3,
        padding: 10
    },
    titulo:{
        fontFamily: 'Urbanist-Bold',
        color: '#686de0',
        fontSize: 23,
        marginLeft: 3,
    },
    salario:{
        fontFamily: 'Urbanist',
        fontSize: 22,
        marginTop: 5,
    },
    descricao:{
        fontSize: 20,
        fontFamily: 'Urbanist',
        marginTop: 5,
        marginBottom: 5
    },
    contato:{
        fontSize: 18,
        fontFamily: 'Urbanist-Bold',
        marginTop: 5,
    },
    formato:{
        paddingBottom: 3,
        marginLeft: 3,
        color: '#121212',
    }
})

export {styles};