import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };



      this.enc = this.enc.bind(this);
      this.dec = this.dec.bind(this);

    }

    enc(){
      this.setState({contador: this.state.contador + 1});
    }

    dec(){
      if(this.state.contador === 0){
        alert('Você não pode mais decrementar !!')
        return;
      }
      this.setState({contador: this.state.contador - 1});
    }

 

    render(){
      return(

        <View>

          <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>Contador de pessoas</Text>

          <View style={styles.flexContainer}>
           <Text style={styles.center}>{this.state.contador}</Text>
          </View>

          <View style={styles.container}>
            <Button title="+" onPress={this.enc}/>
          </View>


          <View style={styles.container}>
            <Button title="-" onPress={this.dec}/>
          </View>

        </View>
      )
    }

}

const styles = StyleSheet.create({
  container:{
    margin: 10,
  },
  flexContainer:{
    display: 'flex', alignItems: 'center'
  },
  center:{
    textAlign: 'center',
    fontSize: 60,
    padding: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: '#222',
    width: 150,
  },
})

export default App;