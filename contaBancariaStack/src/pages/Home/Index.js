import React, {useState} from 'react';
import { View, TextInput,Text, Pressable, StyleSheet, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import {styles} from '../../styles'


export default function Home(){
  const navigation = useNavigation();
 
  function irSobre(){
    let status = "";
    if(pegaNac == 0){
      status = "Não"
    }else{
      status = "Sim"
    }
      navigation.navigate('Dados', { nome: pegaNome, idade: pegaIdade, sexo: pegaSexo, escolaridade: pegaEsco, limite: pegaLimite, nacionalidade: status });
  }
 
  const [pegaNome, setaNome] = React.useState("");
  const [pegaIdade, setaIdade] = React.useState(0);
  const [pegaSexo, setaSexo] = useState("");
  const [pegaEsco, setaEsco] = useState("");
  const [pegaLimite, setaLimite] = useState(0);
  const [pegaNac, setaNac] = useState(0);


  return(
    
    <View style={styles.container}>

      
      <View style={styles.dados} >

            <View>
              <Text style={styles.textoPrincipal} >Abertura de Conta</Text>
            </View>

      <View>

        <TextInput style={[styles.formata,styles.input]} placeholder="Nome:" style={styles.input} onChangeText={(e)=> setaNome(e)}></TextInput>
        <TextInput style={[styles.formata,styles.input]} placeholder="Idade:" style={styles.input} keyboardType='numeric' onChangeText={(e)=> setaIdade(e)}></TextInput>
      
      </View>

        <View style={styles.selecionar} >
          <Text style={[styles.textoPicker, styles.formata]} >Sexo:</Text>
          <Picker  style={styles.picker}  selectedValue={pegaSexo}
            onValueChange={(e)=>setaSexo(e)}>

            <Picker.Item key={0} value ={"Masculino"} label="Masculino"/>
            <Picker.Item key={1} value ={"Feminino"} label="Feminino"/>

          </Picker>
        </View>

        <View style={styles.selecionar}>
          <Text style={[styles.textoPicker, styles.formata]} >Escolaridade:</Text>
          <Picker selectedValue={pegaEsco}
          onValueChange={(e)=>setaEsco(e)}>

          <Picker.Item key={0} value ={"Ensino Superior"} label="Ensino Médio"/>
          <Picker.Item key={1} value ={"Ensino Médio"} label="Ensino Médio"/>
          <Picker.Item key={2} value ={"Ensino Fundamental"} label="Ensino Fundamental"/>
          <Picker.Item key={3} value ={"Le e escreve"} label="Le e escreve"/>
          <Picker.Item key={4} value ={"Analfabeto"} label="Analfabeto"/>

          </Picker>
        </View>

        <View style={styles.limite} >
             <Text style={[styles.textoLimite, styles.formata]} >Limite: {pegaLimite.toFixed(0)} </Text>   
             <Slider style={styles.slider} 
             mininumValue={0} 
             maximumValue={100}
             onValueChange={(e)=> setaLimite(e)} />
           </View>

        <View style={styles.limite} >
          <Text style={[styles.textoLimite,styles.formata]} >Brasileiro:</Text>   
            <Switch value={pegaNac} onValueChange={(e)=> setaNac(e)} />
        </View>
        
        <Pressable style={styles.btn} 
        onPress={irSobre}>
        <Text>Confimar</Text>
        </Pressable>
      </View>
    </View>
  )
}
