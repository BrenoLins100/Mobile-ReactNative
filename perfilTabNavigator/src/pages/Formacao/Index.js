import React from 'react';
import {View,Text} from 'react-native';



import {styles} from '../../styles'

 

export default function Formacao(){
    return(

       
      <View style={styles.container}>
      <View>

       </View>
       <View style={styles.viewtexto} >
         <Text style={styles.texto} >Formacão</Text>
       </View>
       <View>
         <Text style={styles.info} >Ensino Médio</Text>
         <Text style={styles.info} >Informática na ETEC Adolpho Berezin</Text>
         <Text style={styles.info} >Faculdade atual: FATEC Rubens Lara</Text>
       </View>
   </View>

      
    )
}