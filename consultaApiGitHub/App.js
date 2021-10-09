import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import axios from 'axios';
import {styles} from './styles/';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      usuario: "",
      id: "",
      nome: "",
      repositorio: "",
      criado: "",
      seguidores: "",
      seguindo: "",
      imagem: "vazio",
    }
    this.consultar = this.consultar.bind(this);
    this.limpar = this.limpar.bind(this);
    this.inputUsuario = React.createRef();
  }

  consultar(){
    axios.get(`https://api.github.com/users/${this.state.usuario}`).then((resposta)=>{
      this.setState({
        id: resposta.data.id,
        nome: resposta.data.name,
        repositorio: resposta.data.public_repos,
        criado: resposta.data.created_at,
        seguidores: resposta.data.followers,
        seguindo: resposta.data.following,
        imagem: resposta.data.avatar_url
      })
      Keyboard.dismiss();
    })
    .catch(()=>{
     alert('Ocorreu um erro, verifique o nome do usuário digitado e tente novamente')
    })
    //alert('aoba')
  }

  limpar(){
    this.setState({
      usuario: "",
      id: "",
      nome: "",
      repositorio: "",
      criado: "",
      seguidores: "",
      seguindo: "",
      imagem: "vazio",
    })
    this.inputUsuario.current.clear();
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textoPrincipal} >Perfil dos Devs</Text>
        </View>
        <View style={styles.viewImage} >
          <Image style={styles.imagemDev} source={{uri: this.state.imagem}} />
        </View>
        <View style={styles.viewEntrada} > 

          <TextInput ref={this.inputUsuario} onChangeText={(valor)=>{this.setState({usuario: valor})}} style={styles.inputPerfil}  />

          <TouchableOpacity onPress={this.consultar} style={styles.btnPesquisa} >
            <Feather name='search' size={25} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.limpar} style={styles.btnLimpar} >
            <Feather name='x-square' size={25} color='#fff' />
          </TouchableOpacity>

        </View>

      <View style={styles.viewResultados} >
        <Text style={styles.dados} > ID: {this.state.id} </Text>
        <Text style={styles.dados} >Nome: {this.state.nome} </Text>
        <Text style={styles.dados} >Repositórios: {this.state.repositorio} </Text>
        <Text style={styles.dados} >Criado em: {this.state.criado} </Text>
        <Text style={styles.dados} >Seguidores: {this.state.seguidores} </Text>
        <Text style={styles.dados} >Seguindo: {this.state.seguindo} </Text>
      </View>

      </View>
    );
  }
}

