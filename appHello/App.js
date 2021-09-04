import React, {Component} from 'react';
import {View,Text, Image, Button, TextInput} from 'react-native';

//function App(){
  //return(
    //tela que sera renderizada

    //JSX JavaScript XML -> O <View> E <Text>
    //<View>
     // <Text>Olá</Text>
   // </View>
 // );
//}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if (this.state.input === ''){
      alert('Digite um nome !')
      return;
    }
    this.setState({nome: 'Bem vindo:'+ this.state.input});
  }

  render() {

    return(
      
      <View style={{marginTop: 30}}> 

      <TextInput placeholder="Digite seu nome" onChangeText={ (texto)=> this.setState({input: texto}) }
      />


      <Button title="Entrar" onPress={this.entrar} />
     

      <Text style={{color: '#222', fontSize: 30, margin: 25}}>{this.state.nome}</Text>


      <DeathTrooper largura={300}altura={300} nome={'Death Trooper'}/>

      <DeathTrooper largura={500} altura={500} nome={'Death Trooper'}/>

    </View>
    );
  }
}


class DeathTrooper extends Component {
  render() {

    //Props -> Chamando componente e passando infos para ele

    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29-BgCWErXjXVaaLHqJJLHetfTxZbn8hqdw&usqp=CAU';

    return(
      <View>
        <Image
          source={{uri:img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}


//usando 2 estilos style={[styles.estilo1,styles.estilo2]}

//exportando app para o Index.js ver ele 
export default App;