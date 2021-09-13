import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import * as Font from 'expo-font';

import {styles} from './src/styles';



class App extends Component {

  //carregando fontes 
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({

      Urbanist: require('./src/assets/fonts/Urbanist-Regular.ttf'),

      
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
  
  render(){
    if (this.state.fontsLoaded){
      return (

        <View style={styles.container} >

       


          <View style={{margin: 20}} >

          <View><Text style={{padding: 10, fontSize: 30, fontFamily: 'Urbanist', textAlign:'center'}} >Vagas de Ti</Text></View>

            <ScrollView vertical={true} >
              <View style={styles.vaga}>
                <Text style={styles.titulo}>
                  Desenvolverdor FrontEnd
                </Text>
                <Text style={[styles.salario, styles.formato]} >Salário: R$ 4000</Text>
                <Text style={[styles.descricao,styles.formato]} >Descrição: Desenvolver aplicações Web</Text>
                <Text style={[styles.contato,styles.formato]} >Contato: (99)9999-9999</Text>
              </View>
              <View style={styles.vaga}>
                <Text style={styles.titulo}>
                  Desenvolverdor Mobile
                </Text>
                <Text style={[styles.salario, styles.formato]} >Salário: R$ 3500</Text>
                <Text style={[styles.descricao,styles.formato]} >Descrição: Desenvolver aplicações para dispositivos móveis</Text>
                <Text style={[styles.contato,styles.formato]} >Contato: (99)9999-9999</Text>
              </View>
              <View style={styles.vaga}>
                <Text style={styles.titulo}>
                  Desenvolverdor BackEnd
                </Text>
                <Text style={[styles.salario, styles.formato]} >Salário: R$ 5000</Text>
                <Text style={[styles.descricao,styles.formato]} >Descrição: Desenvolver aplicações para o lado servidor</Text>
                <Text style={[styles.contato,styles.formato]} >Contato: (99)9999-9999</Text>
              </View>
              <View style={styles.vaga}>
                <Text style={styles.titulo}>
                 Engenheiro de Dados
                </Text>
                <Text style={[styles.salario, styles.formato]} >Salário: R$ 7000</Text>
                <Text style={[styles.descricao,styles.formato]} >Descrição: gerenciar, otimizar, supervisionar e monitorar a recuperação, armazenamento e distribuição de dados</Text>
                <Text style={[styles.contato,styles.formato]} >Contato: (99)9999-9999</Text>
              </View>
            </ScrollView>
          </View>

        </View>
      );
    } else{
      return null;
    }
  }
}

export default App;