import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,StyleSheet} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0
    }


    this.numeroAleatorio = this.numeroAleatorio.bind(this);
  }


  numeroAleatorio(){
    let geraNumero = Math.floor(Math.random()*10)
    this.setState({numero: geraNumero});
  }

  render() {

    return(

        <>
      
          <View style={styles.container} >

            <Text style={styles.texto} >Jogo do Número Aleatório</Text>

            <View style={styles.container2}>
              <Image source={require('./src/Charada.png')} ></Image>
            </View>

            <Text style={styles.texto} >Pense em um número de 0 a 10</Text>

            <TextInput style={styles.input} >
              {this.state.numero}
            </TextInput>

            <TouchableOpacity style={styles.botao}  onPress={this.numeroAleatorio}>
              <Text style={{fontWeight: '600'}} >Descobrir</Text>
            </TouchableOpacity>

          </View>

      </>

    )

  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  container2:{
    display: 'flex',
    alignItems: 'center',
  },
  input:{
    borderColor: '#05c46b',
    borderWidth: 2,
    marginTop: 5,
    borderRadius: 3,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  texto:{
    color: '#3c40c6',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  botao:{
    marginTop: 10,
    padding: 10,
    backgroundColor: '#0be881',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
  },
})

export default App;