import React, {Component} from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Breno Lins Arbeche';
    let img = 'https://avatars.githubusercontent.com/u/36646169?v=4';
    
    return (
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image source={{uri:img}} style={{width:200,height:200, marginTop: 30}} />
        
        <View style={{display: 'flex', alignItems: 'flex-start'}}>

          <Text style={{marginTop:30}} >Nome:</Text>
          <Text>{nome}</Text>
          <Text>Formação:</Text>
          <Text>Informática - Etec Adolpho Berezin </Text>
          <Text>Experiencia:</Text>
          <Text> Front End, Design, Back End etc.</Text>
          <Text>Confira alguns de meus Projetos:</Text>
          <Text>https://github.com/BrenoLins100</Text>
          
        </View>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    color: 'red'
  }
})

export default App;