import React, { Component } from 'react';
import {View,Text,TextInput,Button, StyleSheet } from 'react-native';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            num2: 0,
            res: 'Resultado:',
            input: 0,
            input2: 0
        };

        this.mult = this.mult.bind(this);
    }

    mult(){
        if(this.state.input === '' || this.state.input2 === ''){
            alert('Campo vazio!')
            return;
        }
        this.setState({res: 'Resultado: ' + this.state.input * this.state.input2});
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textoCentral}>Multiplicador de números</Text>
                <TextInput style={styles.input} placeholder="Digite o primeiro valor " onChangeText={(texto)=> this.setState({input: texto})}/>
                <TextInput style={styles.input} placeholder="Digite o segundo valor" onChangeText={(texto)=> this.setState({input2: texto})}/>
                <Button title="Calcular" onPress={this.mult}/>
                <Text style={{marginTop: 10}}>{this.state.res}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    },
    textoCentral:{
        textAlign: 'center',
        padding: 10
    },
    input:{
        borderWidth: 2,
        borderColor: '#34495e',
        borderRadius: 3,
        padding: 5,
        marginTop: 3,
        marginBottom:6
    }
})

export default App;