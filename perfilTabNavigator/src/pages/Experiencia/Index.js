import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles'


export default function Experiencia(){
    return(
       
      <View style={styles.container}> 
        <View>

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