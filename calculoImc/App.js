import React, {Component} from 'react';
import {TextInput,View,TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      peso: 0,
      altura: 0,
      classif: 'Classificação:'
    };

    this.calculaImc = this.calculaImc.bind(this);

  }

  calculaImc(){

    let imc = this.state.peso / this.state.altura**2;
    let texto = ', Classificação:';

    if( imc < 18.5){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Abaixo do peso'});
    }else if( imc  >= 18.5 && imc <=24.9){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Peso Normal'});
    }else if( imc >= 25 && imc <=29.9){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Sobre Peso'})
    }else if( imc >= 30 && imc <=34.9){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Obesidade Grau 1'})
    }else if(imc >= 35 && imc <=39.9){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Obesidade Grau 2'})
    }else if(imc >=40){
      this.setState({classif: 'Seu Imc é: '+imc.toFixed(2) + texto + ' Obesidade Grau 3 ou Mórbida'})
    }
    
    
  }
  
  render(){
    return (

      <>
      
      <View style={styles.container}>

        <View>
          <Text style={{fontSize:20, textAlign: 'center', padding: 20}} >Cálculo Imc</Text>
        </View>

        <View style={styles.container2}>
          <Image style={{width:150, height:150}} source={require('./src/imc.png')} ></Image>
        </View>

        <TextInput  style={styles.inputs} placeholder="Peso" onChangeText={(valor)=> this.setState({peso: valor})} ></TextInput>
        <TextInput style={styles.inputs}placeholder="Altura" onChangeText={(valor)=> this.setState({altura: valor})} ></TextInput>


        <TouchableOpacity  onPress={this.calculaImc} style={styles.botao} >
          <Text>Verificar</Text>
        </TouchableOpacity>

        <Text style={styles.centro} >{this.state.classif}</Text>

      </View>

      </>

    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    padding: 10
  },
  inputs:{
    borderColor: '#2980b9',
    borderWidth: 2,
    marginTop: 5,
    borderRadius: 3,
    paddingLeft: 10,
  },
  botao:{
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3498db',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
  },
  centro:{
    textAlign: 'center',
    marginTop: 10,
  },
  container2:{
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;