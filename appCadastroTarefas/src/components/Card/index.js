import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
 
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }
 
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
       
        <Text style={styles.descricao}>{description}</Text>
 
        <View style={styles.viewBotoes} >
          <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
            <Text style={{textAlign: 'center'}}>Editar</Text>
            <Feather name='edit-2' size={25} color='#000' />

          </TouchableOpacity>
  
          <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
            <Text style={{textAlign: 'center'}}>Excluir</Text>
            <Feather name='trash-2' size={25} color='#000' />
          </TouchableOpacity>
        </View>


      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 5,
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  descricao:{
    fontSize: 20,
    padding: 15,
  },
  viewBotoes:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "#2ecc71",
    marginVertical: 0,
    marginLeft: 10,
    padding: 10,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "#e74c3c",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
 
export default Card;