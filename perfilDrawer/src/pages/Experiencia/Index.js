import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles'


import Home from '../Home';


export default function Experiencia(){
    return(
       
      <View style={styles.container}> 
        <View>

          {/*Barra do menu*/}
          <Home />

        </View>
        <View style={styles.viewtexto} >
          <Text style={styles.texto} >Experiência</Text>
        </View>
        <View>
         <Text style={styles.info} >Tcc ETEC - Front End</Text>
         <Text style={styles.info} >Buscando estágio na área de TI</Text>
         <Text style={styles.info} >HTML</Text>
         <Text style={styles.info} >CSS</Text>
         <Text style={styles.info} >JS</Text>
       </View>
      </View>
    );
}