import React from 'react';
import { View,Text } from 'react-native';

import {styles} from '../../styles'

export default function Pessoal() {
  return(
        
    <View style={styles.container}>
     <View>
      </View>
      <View style={styles.viewtexto} >
        <Text style={styles.texto} >Pessoal</Text>
      </View>
      <View>
        <Text style={styles.info} >Cidade: Mongaguá</Text>
        <Text style={styles.info} >Faculdade: FATEC Rubens Lara</Text>
        <Text style={styles.info} >RA: 0050831911003</Text>
      </View>
  </View>

)
}