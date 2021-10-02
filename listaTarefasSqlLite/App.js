import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, Alert } from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// Para Expo
import * as SQLite from 'expo-sqlite';
 
// Para React Native CLI

// Para Expo
const db = SQLite.openDatabase("tarefas.db");
 
const App = () => {

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [mostraMsg, setaMsg] = useState(true);

  


 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const deletaTarefa = (id)=>{

    return Alert.alert(
      "Você tem certeza 😨?",
      "Deseja deletar o item ?",

      [

      // o botao sim 

      {
        text: 'Sim',
        onPress: ()=>{
          setaMsg(false);
          db.transaction(txn => {
            txn.executeSql(
              `delete from tarefas where id = ?;`, [id],
              (sqlTxn, res) => {
                console.log(`${tarefa} Tarefa deletada com sucesso!`);
                setTarefas("");
                getTarefas();
              },
              error => {
                console.log("Erro ao deletar uma Tarefa " + error.message);
              },
            );
          });
        },
      },

      // o botao nao

      {
        text: 'Não',
      },

      ]

    )

  }
 
  const renderTarefa = ({ item }) => {
    return (
      
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>

        <View style={styles.viewId} >
         <Text style={{ marginRight: 9 }}>Id: {item.id}</Text>
         <Text>Nome: {item.nome}</Text>
        </View>
        
        <View style={styles.viewDeletar} >
         <Feather style={{marginTop: 10}} onPress={()=>{deletaTarefa(item.id)}} name='x-circle' size={20} color='#131313' />
        </View>
      
      </View>
    );
  };
 


  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);



  return (
    <View>

      <StatusBar backgroundColor="#f1c40f" />
 
      <Text style={styles.textoPrincipal} >Tarefas</Text>

      <View style={styles.cadastrar} >

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Informe uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
      </View>


      <View style={styles.viewBtn} >
        
      <TouchableOpacity onPress={incluirTarefa} style={styles.btnSalvar} >
        <Feather name='plus' size={20} color='#131313' />
      </TouchableOpacity>
      </View>

      </View>
    
       
      
 
      <FlatList
        data={tarefas}
        renderItem={renderTarefa} 
        key={t => t.id} 
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cadastrar:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  textoPrincipal:{
    fontSize: 25,
    marginTop: 3,
    padding: 3,
    textAlign: 'center',
  },
  viewEntrada:{
    flex: 11,
    padding: 5
  },
  viewBtn:{
    flex: 1,
    padding: 5
  },
  btnSalvar:{
    borderWidth: 1,
    borderColor: '#131313',
    borderRadius: 3,
    width: 30,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaTexto:{
    borderWidth: 1,
    borderColor: '#131313',
    paddingLeft: 3,
    borderRadius: 3, 
  },
  viewId:{
    flex: 11,
  },
  viewDeletar:{
    flex: 1,
  },
})

export default App;
