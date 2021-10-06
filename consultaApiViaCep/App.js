import React, {Component} from 'react';
import {View,Text,Keyboard, TextInput, TouchableOpacity, Alert } from 'react-native';

import axios from 'axios';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      tarefas: [],
      cepUsuario: 0,
      cep: '',
      logradouro:'',
      bairro: '',
      cidade: '',
      estado: '',
    };
    this.pesquisar = this.pesquisar.bind(this);
    this.limpar = this.limpar.bind(this);
    this.inputValorCep = React.createRef();

  }

  pesquisar(){
    axios.get(`https://viacep.com.br/ws/${this.state.cepUsuario}/json/`).then((resposta)=>{
      this.setState
      ({
        cep: resposta.data.cep,
        logradouro: resposta.data.logradouro,
        bairro: resposta.data.bairro,
        cidade: resposta.data.localidade,
        estado: resposta.data.uf,
      })
    })
    .catch((erro)=>{
      return Alert.alert(
      "Erro ao carregar as informações 😰",
      "Verifique o Cep inserido e tente novamente"
      )
    })
    Keyboard.dismiss();
  }

  limpar(){
    this.setState({
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: '',
    })
    this.inputValorCep.current.clear();
  }

  render(){
      return(

        <View style={styles.container} >
          <View style={{marginTop: 10,padding: 10,}}>
            <Text style={styles.textoPrincipal} >Cep x Endereço</Text>
          <View style={styles.digitarCep} >
            <View style={styles.viewInput} >
              <TextInput placeholderTextColor="#fff" ref={this.inputValorCep} keyboardType='numeric' maxLength={8} onChangeText={(valor)=>{this.setState({cepUsuario: valor})}} placeholder="Digite seu cep" style={styles.inputCep}  />
            </View>
            <View style={styles.viewBtn} >
              <TouchableOpacity onPress={this.pesquisar} style={styles.btnCep} >
              <Feather name='search' size={25} color='#fff' />
              </TouchableOpacity>
            </View>
            <View style={styles.viewBtn} >
              <TouchableOpacity onPress={this.limpar} style={styles.btnLimpar} >
                <Feather name='x-circle' size={25} color='#fff' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.resultados} >
            <Text style={styles.res} >Cep:{this.state.cep}</Text>
            <Text style={styles.res}>Logradouro:{this.state.logradouro}</Text>
            <Text style={styles.res}>Bairro:{this.state.bairro}</Text>
            <Text style={styles.res}>Cidade:{this.state.cidade}</Text>
            <Text style={styles.res}>Estado:{this.state.estado}</Text>
          </View>
          </View>
        </View>
      );
  }
}

