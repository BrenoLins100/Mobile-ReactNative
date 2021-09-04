import React, {Component} from 'react';
import {View,TextInput,TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alcool:0,
      gasolina: 0,
      result: 'Resultado'
    };

    this.calcula = this.calcula.bind(this);

  }

  calcula(){

    if(this.state.alcool / this.state.gasolina < 0.7 ){
      this.setState({result: 'Alcool é a melhor opção'});
    }else{
      this.setState({result: 'Gasolina é a melhor opção'});
    }
  }
  
  render(){
    return(
      <>

        <View style={styles.container}>

          
        <Text style={{fontSize:20, textAlign: 'center', padding: 20}} >Alcool ou Gasolina</Text>

          <Image source={require('./src/combustiveis.png')} style={styles.imagem} ></Image>
          

          <TextInput style={styles.inputs} placeholder="Digite o preço do Alcool"  onChangeText={(valor)=>this.setState({alcool: valor})} />
          <TextInput style={styles.inputs}placeholder="Digite o preço da Gasolina" onChangeText={(valor)=> this.setState({gasolina: valor})}/>

          <View>
            <TouchableOpacity  onPress={this.calcula} style={styles.botao}>
              <Text style={styles.texto}>Verificar</Text>
            </TouchableOpacity>

            <Text style={[styles.texto, styles.centro]} >{this.state.result}</Text>

          </View>

        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    padding:10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputs:{
    borderColor: '#05c46b',
    borderWidth: 2,
    marginTop: 5,
    borderRadius: 3,
    paddingLeft: 10,
    width: 335
  },
  botao:{
    marginTop: 10,
    padding: 10,
    backgroundColor: '#0be881',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
    width: 335
  },
  texto: {
    color: '#485460',
    fontSize: 16,
    fontWeight: '600'
  },
  centro:{
    marginTop: 10,
    textAlign: 'center',
  },
  imagem:{
    width: '90%'
  }
})

export default App;