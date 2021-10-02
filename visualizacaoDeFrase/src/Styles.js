import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    textoPrincipal:{
        fontSize:30,
        textAlign: 'center',
    },
    frases:{
      margin: 10,
      padding: 10
    },
    switch:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    texto:{
      flex: 5,
    },
    dia:{
      flex: 2,
    },
    input:{
      borderWidth: 2,
      borderColor: '#000'
    },
    salvar:{
      margin: 10,
      padding: 10
    },
    btn:{
      backgroundColor: '#27ae60',
      padding: 10,
      borderRadius: 3,
      textAlign: 'center',
    }
  })

  export {styles};