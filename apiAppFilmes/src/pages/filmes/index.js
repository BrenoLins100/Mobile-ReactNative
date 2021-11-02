import React, { useEffect,useState } from "react";
import { View, Text, FlatList,Image, TouchableOpacity, ScrollView } from "react-native";

import api from "../../../src/services/api.js";

import {styles} from '../../../styles/styles.js';


import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function filmes({navigation}) {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
  });


  const [filmes,setFilmes] = useState([]);

  useEffect(async()=>{
    const resposta = await api.get("r-api/?api=filmes");
    setFilmes(resposta.data)
  },[])
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
        <View style={styles.container}>
         <ScrollView>
         <View style={styles.filmes} >
              <Text style={[styles.texto,{fontFamily:'Inter_400Regular'}]} >App De Filmes </Text>
          </View>
          <View>
              <FlatList 
              data={filmes} 
              keyExtractor={item=> item.id.toString()}
              renderItem={({item})=> (

                <View style={styles.filme} >
                    <View style={styles.infos}>
                        <Text style={[styles.nomeFilme,{fontFamily:'Inter_400Regular'}]} >{item.nome}</Text>
                        
                        <TouchableOpacity onPress={()=>{navigation.navigate('Detalhes', {sinopse:item.sinopse, nome:item.nome} )}} >
                            <Text style={[styles.lerMais,{fontFamily:'Inter_400Regular'}]} >Leia Mais</Text>
                        </TouchableOpacity>

                    </View>
                    <Image style={styles.imagemFilme} source={{uri:item.foto}} />
                </View>

              )  }

              />
          </View>
         </ScrollView>
        </View>
      );
  }
  
}
