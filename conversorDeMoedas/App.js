import React, {Component} from 'react';
import {View,Text,TouchableOpacity, TextInput} from 'react-native';
import {styles} from './src/styles'

import * as Font from 'expo-font';

import {Picker} from '@react-native-picker/picker';

class App extends Component{

  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
    
      Urbanist: require('./src/assets/fonts/Urbanist-Regular.ttf'),

      'Urbanist-Bold': {
        uri: require('./src/assets/fonts/Urbanist-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }


  
  constructor(props) {

    super(props);

    this.state = {
      moeda: 0,
      moeda2: 0,
      entradaUsuario: 0,
      resultado: '',
      moedas:[

        {nome: 'Dólar'},
        {nome: 'Real'},
        {nome: 'Euro'}
      ],
      moedas2:[
        {nome: 'Dólar'},
        {nome: 'Real'},
        {nome: 'Euro'}
      ],
    };

    this.converte = this.converte.bind(this);

  };


  converte(){

    let dolar = 5.23;
    let euro = 6.17;
    let de = this.state.moeda;
    let para = this.state.moeda2;
    let valorUsuario = this.state.entradaUsuario;

    if(de === 0 && para === 1){
      this.setState({resultado: 'R$'+ (dolar * valorUsuario).toFixed(2)})
    }else if(de  === 2 && para === 1){
      this.setState({resultado: 'R$'+(euro * valorUsuario).toFixed(2)})
    }else if(de === 1 && para === 0){
      this.setState({resultado: '$'+(valorUsuario / dolar).toFixed(2)})
    }else if(de === 1 && para === 2){
      this.setState({resultado: '€'+ (valorUsuario / euro).toFixed(2)})
    }else if(de === 0 && para === 2){
      this.setState({resultado: '€'+((valorUsuario * dolar) / euro ).toFixed(2)})
    }else if(de  === 2 && para === 0){
      this.setState({resultado: '$'+ ((valorUsuario * euro) / dolar).toFixed(2)})
    }else if(de  === 0 && para === 0 || de  === 1 && para === 1 || de  === 2 && para === 2){
      alert('Insira moedas diferentes!');
    }
  }


  render(){

    let moedasItem = this.state.moedas.map((valor, chave)=>{
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    
    let moedasItem2 = this.state.moedas2.map((valor, chave)=>{
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })


    if (this.state.fontsLoaded) {


    return(
      <View style={styles.container}>

        <View style={styles.conversor}>

       
          <Text style={{fontSize:30,marginBottom: 40, fontFamily: 'Urbanist-Bold'}} >Conversor de Moedas Dólar, Real e Euro</Text>

          <View style={styles.valor}>
            
            <Text style={{marginRight: 8, fontSize: 20, fontFamily: 'Urbanist'}} >Valor:</Text>
            
            <TextInput keyboardType="numeric" onChangeText={(valor)=> this.setState({entradaUsuario: valor})} style={styles.input}  />

          </View>
          
          <View style={styles.valor} >
            <Text style={styles.texto}>De:</Text>

            <Picker 

            selectedValue={this.state.moeda}
            onValueChange = {(itemValue, itemIndex) => this.setState({moeda: itemValue})} 
            
            style={styles.picker} >

              {moedasItem}
              
            </Picker>

          </View>

          <View style={styles.valor} >
            <Text style={styles.texto}>Para:</Text>
            
            <Picker 

            selectedValue={this.state.moeda2}
            onValueChange = {(itemValue, itemIndex) => this.setState({moeda2: itemValue})} 
            
            style={styles.picker} >

              {moedasItem2}
              
            </Picker>

          </View>
          
          <TouchableOpacity style={styles.btn} onPress={this.converte} >
            <Text style={{textAlign: 'center', fontFamily:'Urbanist-Bold'}} >Converter</Text>
          </TouchableOpacity>

          <Text style={styles.resultado} >Valor: {this.state.resultado}</Text>

        </View>
        
      </View>
    );
  } else {
    return null;
  }

}
}

export default App;