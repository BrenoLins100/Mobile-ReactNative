import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './src/styles';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>

        <Text style={{fontSize: 40, color: '#f1c40f', textAlign: 'center'}} >Anúncios</Text>

        <ScrollView horizontal={true} >

          <View style={styles.anuncio}>

            <View style={styles.imagem} >
              <Image style={{width: 100, height:100}} source={require('./src/ps5.png')} ></Image>
            </View>
            
            <Text style={styles.titulo} >Sony Playstation 5</Text>
            <Text style={styles.preco} >R$2800,00</Text>
          </View>

          <View style={styles.anuncio}>

            <View style={styles.imagem} >
              <Image style={{width: 200, height:100}} source={require('./src/rtx.png')} ></Image>
            </View>
            
            <Text style={styles.titulo} >RTX 3090</Text>
            <Text style={styles.preco} >R$14800,00</Text>
          </View>

          <View style={styles.anuncio}>

            <View style={styles.imagem} >
              <Image style={{width: 100, height:100}} source={require('./src/mine.png')} ></Image>
            </View>
            
            <Text style={styles.titulo} >Bloco de grama </Text>
            <Text style={styles.preco} >R$8,00</Text>
          </View>

          <View style={styles.anuncio}>

            <View style={styles.imagem} >
              <Image style={{width: 100, height:100}} source={require('./src/xwing.png')} ></Image>
            </View>
            
            <Text style={styles.titulo} >X-Wing</Text>
            <Text style={styles.preco} >R$12.800.000</Text>
          </View>

          <View style={styles.anuncio}>

            <View style={styles.imagem} >
              <Image style={{width: 100, height:100}} source={require('./src/clone.png')} ></Image>
            </View>
            
            <Text style={styles.titulo} >Capacete de Clone</Text>
            <Text style={styles.preco} >R$800,00</Text>
          </View>
          
        </ScrollView>
      </View>
    );
  }
}



export default App;