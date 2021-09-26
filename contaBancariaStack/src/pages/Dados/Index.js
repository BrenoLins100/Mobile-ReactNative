import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles'
 
export default function Dados( {route} ){
  const navigation = useNavigation();
 
  return(
    <View>
        <View style={styles.dados} >
        <Text style={styles.mostraTexto} >Dados Informados:</Text>
        <Text style={[styles.formata,styles.formata2]} >Nome: {route.params?.nome}</Text>
        <Text style={[styles.formata,styles.formata2]}>Idade: {route.params?.sexo}</Text>
        <Text style={[styles.formata,styles.formata2]}>Escolaridade: {route.params?.escolaridade}</Text>
        <Text style={[styles.formata,styles.formata2]}>Limite: {route.params?.limite.toFixed(0)}</Text>
        <Text style={[styles.formata,styles.formata2]}>Brasileiro: {route.params?.nacionalidade}</Text>
        <Pressable style={styles.btn}
        title='Voltar para tela Home'
        onPress={ () => navigation.goBack() }
        >
          <Text>Voltar</Text>
        </Pressable>
      </View>
    </View>
  )
}
