import {StyleSheet} from 'react-native';

//import {fontes} from './fontes'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    filmes:{
        padding: 40
    },
    texto:{
        textAlign: 'center',
        fontSize: 25
    },
    filme:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    infos:{
        flexDirection:'row',
        padding: 10
    },
    nomeFilme:{
        fontSize: 15
    },
    lerMais:{
        fontSize: 15,
        marginLeft: 30
    },
    imagemFilme:{
        width: 230,
        height: 200
    },
    sinopse:{
        padding: 30
    }
})

export {styles};