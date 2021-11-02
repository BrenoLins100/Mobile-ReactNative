import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from '../../../styles/styles.js';

export default function detalhes({route}) {
  const navigation = useNavigation();
 return (
   <View>
     
       <View>

       <View style={styles.filmes} >
              <Text style={[styles.texto,{fontFamily:'Inter_400Regular'}]} >App De Filmes </Text>
        </View>
         
        <TouchableOpacity style={{flexDirection: 'row', padding: 30, alignItems: 'center'}}
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
        
          <Feather name="chevron-left" size={15} color="#000" />
          <Text style={{fontFamily:'Inter_400Regular'}} >Voltar</Text>

        </TouchableOpacity>

         <View style={styles.sinopse} >
          <Text style={[styles.nomeFilme,{fontFamily:'Inter_400Regular',fontSize: 20}]}  >{route.params?.nome} - Sinopse</Text>
          <Text style={[styles.nomeFilme,{fontFamily:'Inter_400Regular', marginTop: 20}]}  >{route.params?.sinopse}</Text>
         </View>

       </View>
   </View>
  );
}