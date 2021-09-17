import React, {Component} from 'react';
import {View,Text,TextInput,Pressable,Switch} from 'react-native';
import * as Font from 'expo-font';
import {styles} from './src/styles';
 
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

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

  constructor(props){
    super(props);

    this.state ={
      selecao: [
        {Sexo: 'Masculino'},
        {Sexo: 'Feminino'}
      ],
      genero: 0,
      selecao2:[
        {Escolaridade: 'Ensino Superior'},
        {Escolaridade: 'Ensino Médio'},
        {Escolaridade: 'Ensino Fundamental'},
        {Escolaridade: 'Le e escreve'},
        {Escolaridade: 'Analfabeto'}
      ],
      escolaridade: 0,
      nome: '',
      idade: '',
      limite: 0,
      brasileiro: 0,
      mostraNome: '',
      mostraIdade: '',
      mostraGenero: '',
      mostraLimite: '',
      mostraEscolaridade: '',
      mostraBrasileiro: '',
    };


    this.imprimeDados = this.imprimeDados.bind(this);
    this.limpaDados = this.limpaDados.bind(this);

    this.inputs = React.createRef();
    this.inputs2 = React.createRef();

  }

  imprimeDados(){
    
    this.setState({mostraNome: this.state.nome});
    this.setState({mostraIdade: this.state.idade});
    this.setState({mostraLimite: this.state.limite.toFixed(0)});


    if(this.state.genero === 0){
      this.setState({mostraGenero: 'Masculino'});
    }else if(this.state.genero === 1){
      this.setState({mostraGenero: 'Feminino'})
    }

    if(this.state.escolaridade === 0){
      this.setState({mostraEscolaridade: 'Ensino Superior'});
    }else if(this.state.escolaridade === 1){
      this.setState({mostraEscolaridade: 'Ensino Médio'});
    }else if(this.state.escolaridade === 2){
      this.setState({mostraEscolaridade: 'Ensino Fundamental'});
    }else if(this.state.escolaridade === 3){
      this.setState({mostraEscolaridade: 'Le e escreve'});
    }else if(this.state.escolaridade === 4){
      this.setState({mostraEscolaridade: 'Analfabeto'});
    }

    if(this.state.brasileiro == 0){
      this.setState({mostraBrasileiro: 'Não'});
    }else{
      this.setState({mostraBrasileiro: 'Sim'})
    }

  }

  limpaDados(){
    this.setState({mostraNome: ''});
    this.setState({mostraIdade: ''});
    this.setState({mostraLimite: ''});
    this.setState({mostraGenero: ''});
    this.setState({mostraEscolaridade: ''});
    this.setState({mostraBrasileiro: ''});

    this.inputs.current.clear();
    this.inputs2.current.clear();
  }
  

  render(){

    let sexosItem = this.state.selecao.map((valor, chave)=>{
      return <Picker.Item key={chave} value={chave} label={valor.Sexo} />
    })

    let escosItem = this.state.selecao2.map((valor,chave)=>{
      return <Picker.Item key={chave} value={chave} label={valor.Escolaridade} />
    })


    if (this.state.fontsLoaded) {
      return(
        <View style={styles.container} >

         <View style={styles.dados} >

           <View>
            <Text style={styles.textoPrincipal} >Abertura de Conta</Text>
           </View>

           <View>
             <TextInput  ref={this.inputs} onChangeText={(valor)=> this.setState({nome: valor})} style={[styles.formata,styles.input]} placeholder="Nome:" ></TextInput>
             <TextInput  ref={this.inputs2} keyboardType='numeric'  onChangeText={(valor)=> this.setState({idade: valor})}style={[styles.formata,styles.input]} placeholder="Idade:" ></TextInput>
           </View>

           <View style={styles.selecionar} >
             <Text style={[styles.textoPicker, styles.formata]} >Sexo:</Text>
             <Picker selectedValue={this.state.genero} onValueChange={(itemValue)=>this.setState({genero: itemValue})}  style={styles.picker} >
               {sexosItem}
             </Picker>
           </View>

           <View style={styles.selecionar} >
             <Text style={[styles.textoPicker, styles.formata]} >Escolaridade:</Text>
             <Picker selectedValue={this.state.escolaridade} onValueChange={(itemValue)=>this.setState({escolaridade: itemValue})}  style={styles.picker}  style={styles.picker} >
               {escosItem}
             </Picker>
           </View>

           <View style={styles.limite} >
             <Text style={[styles.textoLimite, styles.formata]} >Limite: </Text>   
             <Text style={{fontFamily: 'Urbanist', marginTop: 3}} >{this.state.limite.toFixed(0)}</Text>
             <Slider style={styles.slider} 
             mininumValue={0} 
             maximumValue={100}
             onValueChange={(valorSelecionado)=> this.setState({limite: valorSelecionado})} />
           </View>
           
           <View style={styles.limite} >
             <Text style={[styles.textoLimite,styles.formata]} >Brasileiro:</Text>   
             <Switch 
              value={this.state.brasileiro}
              onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}/>
           </View>

           <View>
              <Pressable onPress={this.imprimeDados} style={styles.btn} >
                <Text style={[styles.formata,{textAlign: 'center'}]} >Confirmar</Text>
              </Pressable>
            </View>

            <View>
              <Pressable onPress={this.limpaDados} style={styles.btn} >
                <Text style={[styles.formata,{textAlign: 'center'}]} >Limpar</Text>
              </Pressable>
            </View>

            <View>

              <Text style={styles.mostraTexto} >Dados Informados:</Text>

              <Text style={styles.formata} >Nome: {this.state.mostraNome} </Text>
              <Text style={styles.formata} >Idade: {this.state.mostraIdade} </Text>
              <Text style={styles.formata} >Sexo: {this.state.mostraGenero} </Text>
              <Text style={styles.formata} >Escolaridade: {this.state.mostraEscolaridade} </Text>
              <Text style={styles.formata} >Limite: {this.state.mostraLimite} </Text>
              <Text style={styles.formata} >Brasileiro: {this.state.mostraBrasileiro} </Text>
              
            </View>

         </View>
        </View>
      );
    } else{
      return null;
    }
  }
}

export default App;