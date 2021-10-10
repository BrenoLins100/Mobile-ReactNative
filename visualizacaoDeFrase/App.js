import React, {Component, Alert} from 'react'; 

import { View,Text,Switch,TextInput, TouchableOpacity} from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather'; 

 
 

import {styles} from './src/Styles' 

 
 

export default  class App extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        switch: 0,
        switch2: 0,
      }
    }

    async componentDidMount(){
      await AsyncStorage.getItem('switch').then((e)=>{
        this.setState({switch: JSON.parse(e)})
        AsyncStorage.getItem('switch2').then((e)=>{
          this.setState({switch2: JSON.parse(e)})
        })
      })

      

    }

    async componentDidUpdate(_, prevState) {
      const status = this.state.switch;
      const status2 = this.state.switch2;
  
      await AsyncStorage.setItem('switch', JSON.stringify(status));
      await AsyncStorage.setItem('switch2', JSON.stringify(status2));
    }

    render() {

    
     
    return ( 

      <View style={[styles.container, (this.state.switch == 1) ? {backgroundColor: '#fff'} : {backgroundColor: '#000'}   ]} > 

   
      <View style={styles.frases}>

        <Text style={[styles.textoPrincipal, (this.state.switch == 1) ? {color: '#000'} : {color: '#fff'} ]} >Frases</Text> 

   

        <View style={styles.frases} > 

   

          <View style={styles.switch} > 

           <Text style={[styles.texto, (this.state.switch == 1) ? {color: '#000'} : {color: '#fff'} ]} >Dia</Text> 
           <Feather name='moon' size={23} style={(this.state.switch == 1) ? {color: '#000'} : {color: '#fff'}} />

          <Switch value={(this.state.switch == 0 ? false : true)} onValueChange={(e)=>this.setState({switch: e ? 1 : 0})} /> 

          <Feather name='sun' size={23}  style={(this.state.switch == 1) ? {color: '#000'} : {color: '#fff'}} />
         </View> 


         <View style={styles.switch} > 

           <Text style={[styles.texto, (this.state.switch == 1) ? {color: '#000'} : {color: '#fff'} ]} >Pequeno</Text> 
           <Feather name='chevrons-up' size={23}  style={(this.state.switch == 1) ? {color: '#000'} : {color: '#fff'}} />
          <Switch value={(this.state.switch2 == 0 ? false : true)} onValueChange={(x)=>this.setState({switch2: x ? 1 : 0})} />
          <Feather name='chevrons-down' size={23}  style={(this.state.switch == 1) ? {color: '#000'} : {color: '#fff'}} />

         </View> 

        </View> 

        <View style={styles.salvar} >
          <Text style={[(this.state.switch == 1) ? {color: '#000'} : {color: '#fff'}, (this.state.switch2 == 1 ) ? {fontSize: '10px'} : {fontSize: '30px'}  ]} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam ut mi facilisis sagittis eget a risus. Morbi rutrum porta libero et vestibulum. Nullam nulla diam, tincidunt a dapibus nec, lobortis vitae felis. Sed tincidunt quam sit amet eros laoreet cursus. Suspendisse sed felis vulputate, porttitor massa at, tempus elit. Nulla facilisi. Cras odio lorem, blandit at quam sed, tincidunt feugiat mauris. Nunc sed malesuada lectus. Nam consequat est in nisi cursus laoreet. Suspendisse ut consequat libero. Suspendisse potenti.
          </Text>
        </View>
 
 
        </View>

      </View> 

     ); 
    }
} 