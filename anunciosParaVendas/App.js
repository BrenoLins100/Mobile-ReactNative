import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './src/styles';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

class App extends Component {

  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Urbanist: require('./src/assets/fonts/Urbanist-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Urbanist-Bold': {
        uri: require('./src/assets/fonts/Urbanist-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }


  render() {

    if (this.state.fontsLoaded) {

    return(

      
      <View style={styles.container}>

        <Text style={{fontSize: 40, color: '#222', textAlign: 'center', fontFamily: 'Urbanist'}} >Anúncios</Text>

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
              <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={require('./src/rtx.png')} ></Image>
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

    } else {
      return null;
    }

  }
}



export default App;