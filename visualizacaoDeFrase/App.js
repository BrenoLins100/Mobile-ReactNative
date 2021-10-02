import React, {useState, Alert} from 'react'; 

import { View,Text,Switch,TextInput, TouchableOpacity} from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage'; 

 
 

import {styles} from './src/Styles' 

 
 

export default  function App() { 

 
 

    const [valorSwitch ,setValorSwitch] = useState("");  
    const [valorSwitch2 ,setValorSwitch2] = useState(""); 

    const [valorFundo, setaValorFundo] = useState(""); 
    const [valorFundo2, setaValorFundo2] = useState(""); 
    const [valorTamanho, setaValorTamanho]  = useState(""); 

    let fundo = ''; 
    let texto = '';
    let tamanho = '';

    const salvar = ()=>{ 

      if(valorSwitch == 0){ 

        fundo = '#222'
        texto = '#fff' 

        AsyncStorage.setItem('chave',fundo); 

        AsyncStorage.setItem('chave2',texto); 

      }else{ 

        fundo = "#fff" 
        texto = "#222"

        AsyncStorage.setItem('chave',fundo); 

        AsyncStorage.setItem('chave2',texto); 


      } 

      if(valorSwitch2 == 0){ 
        tamanho = '30px'
        AsyncStorage.setItem('chave3',tamanho); 
      }else{
        tamanho = '10px'
        AsyncStorage.setItem('chave3',tamanho); 
      }

      alert('As mudanças foram salvas')
      exibe(); 

    } 

     
    const exibe = ()=>{ 

      AsyncStorage.getItem('chave').then((valor)=>{ 

        setaValorFundo(valor); 

      }) 

      AsyncStorage.getItem('chave2').then((valor)=>{ 

        setaValorFundo2(valor); 

      }) 

      AsyncStorage.getItem('chave3').then((valor)=>{ 

        setaValorTamanho(valor); 

      }) 

    } 

    exibe(); 

     
    return ( 

      <View style={[styles.container, {backgroundColor: valorFundo}]} > 

   
      <View style={styles.frases}>

        <Text style={[styles.textoPrincipal, {color: valorFundo2}]} >Frases</Text> 

   

        <View style={styles.frases} > 

   

          <View style={styles.switch} > 

           <Text style={[styles.texto, {color: valorFundo2}]} >Dia</Text> 

          <Switch value={valorSwitch } onValueChange={(e)=>setValorSwitch(e)} /> 

         </View> 


         <View style={styles.switch} > 

           <Text style={[styles.texto, {color: valorFundo2}]} >Pequeno</Text> 

          <Switch value={valorSwitch2} onValueChange={(e)=>{setValorSwitch2(e)}} /> 

         </View> 

        </View> 


        <View style={styles.salvar} >
          <TouchableOpacity  style={styles.btn} onPress={salvar} > 
           <Text style={ {color: valorFundo2, fontWeight: '600'}} >Salvar preferências</Text> 
          </TouchableOpacity> 
        </View>



        <View style={styles.salvar} >
          <Text style={{fontSize: valorTamanho, color: valorFundo2}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam ut mi facilisis sagittis eget a risus. Morbi rutrum porta libero et vestibulum. Nullam nulla diam, tincidunt a dapibus nec, lobortis vitae felis. Sed tincidunt quam sit amet eros laoreet cursus. Suspendisse sed felis vulputate, porttitor massa at, tempus elit. Nulla facilisi. Cras odio lorem, blandit at quam sed, tincidunt feugiat mauris. Nunc sed malesuada lectus. Nam consequat est in nisi cursus laoreet. Suspendisse ut consequat libero. Suspendisse potenti.
          </Text>
        </View>
 
 
        </View>

      </View> 

     ); 

} 