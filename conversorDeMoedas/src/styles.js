import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    conversor:{
        marginTop: 30,
        padding: 25
    },
    valor:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        borderWidth: 1.5,
        borderColor: '#131313',
        flex: 1,
        paddingLeft: 3,
        borderRadius: 3,
        fontFamily: 'Urbanist'
    },
    texto:{
        flex: 2.2,
        marginTop: 30,
        fontSize: 17,
        fontFamily: 'Urbanist'
    },
    picker:{
        flex: 1,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#222',
        fontFamily: 'Urbanist'
    },
    btn:{
        marginTop: 30,
        backgroundColor: '#f1c40f',
        padding: 10,
        borderRadius: 3,
    },
    resultado:{
        fontFamily: 'Urbanist',
        marginTop: 30,
        fontSize: 30
    }
})

export {styles}