import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

import api from "./src/services/api.js";

import { styles } from "./styles/styles.js";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import axios from "axios";

export default function app() {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  const [deSelecao, setDeSelecao] = useState("");
  const [paraSelecao, setParaSelecao] = useState("");
  const [valorConversao, setValorConversao] = useState(0);

  const [resultado, setResultado] = useState("");

  const [dolarReal, setDolarReal] = useState(0);
  const [euroReal, setEuroReal] = useState(0);
  const [btcReal, setBtcReal] = useState(0);

  let calculo = "";

  const calcular = () => {
    if (deSelecao == "Dolar" && paraSelecao == "Real") {
      calculo = dolarReal * valorConversao;
      setResultado(calculo);
    } else if (deSelecao == "Euro" && paraSelecao == "Real") {
      calculo = euroReal * valorConversao;
      setResultado(calculo);
    } else if (deSelecao == "Bitcoin" && paraSelecao == "Real") {
      calculo = (btcReal * valorConversao).toFixed(5);
      setResultado(calculo);
    } else if (deSelecao == "Real" && paraSelecao == "Dolar") {
      calculo = (valorConversao / dolarReal).toFixed(2);
      setResultado(calculo);
    } else if (deSelecao == "Real" && paraSelecao == "Euro") {
      calculo = (valorConversao / euroReal).toFixed(2);
      setResultado(calculo);
    } else if (deSelecao == "Real" && paraSelecao == "Bitcoin") {
      calculo = (valorConversao / btcReal).toFixed(5);
      setResultado(calculo);
    } else if (deSelecao == "Euro" && paraSelecao == "Dolar") {
      calculo = valorConversao * (euroReal / dolarReal).toFixed(2);
      setResultado(calculo);
    } else if (deSelecao == "Euro" && paraSelecao == "Bitcoin") {
      calculo = valorConversao * (euroReal / btcReal).toFixed(5);
      setResultado(calculo);
    } else if (deSelecao == "Dolar" && paraSelecao == "Euro") {
      calculo = valorConversao * (dolarReal / euroReal).toFixed(2);
      setResultado(calculo);
    } else if (deSelecao == "Dolar" && paraSelecao == "Bitcoin") {
      calculo = valorConversao * (dolarReal / btcReal).toFixed(5);
      setResultado(calculo);
    } else if (deSelecao == "Bitcoin" && paraSelecao == "Dolar") {
      calculo = valorConversao * (btcReal / dolarReal).toFixed(5);
      setResultado(calculo);
    } else if (
      (deSelecao == "Real" && paraSelecao == "Real") ||
      (deSelecao == "Euro" && paraSelecao == "Euro") ||
      (deSelecao == "Dolar" && paraSelecao == "Dolar") ||
      (deSelecao == "Bitcoin" && paraSelecao == "Bitcoin")
    ) {
      setResultado("Insira moedas diferentes");
    }
  };

  const mounted = useRef();
  useEffect(async () => {
    if (!mounted.current) {
      //dolar para real
      const resposta = await api.get("json/last/USD-BRL,EUR-BRL,BTC-BRL");

      setDolarReal(Number(resposta.data.USDBRL.ask).toFixed(2));
      setEuroReal(Number(resposta.data.EURBRL.ask).toFixed(2));
      setBtcReal(Number(resposta.data.BTCBRL.ask).toFixed(7));
      setDeSelecao("Dolar");
      setParaSelecao("Real");
      mounted.current = true;
      calcular();
    } else {
      calcular();
    }
  }, [deSelecao, paraSelecao, valorConversao]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        
        <StatusBar backgroundColor="#FFF" />
        <View style={styles.conversor}>
        <Text style={styles.texto}>Conversor de Moedas</Text>
          <View style={[styles.entrada, { marginTop: 30 }]}>
            <Text style={styles.valor}>Valor:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputUsuario}
              onChangeText={(e) => {
                setValorConversao(e);
              }}
            />
          </View>

          <View style={styles.selecao}>
            <View style={styles.entrada}>
              <Text style={[styles.valor]}>De:</Text>

              <Picker
                style={styles.picker}
                selectedValue={deSelecao}
                onValueChange={(e) => setDeSelecao(e)}
              >
                <Picker.Item label="Real" value="Real" />
                <Picker.Item label="Dólar" value="Dolar" />
                <Picker.Item label="Euro" value="Euro" />
                <Picker.Item label="BitCoin" value="Bitcoin" />
              </Picker>
            </View>

            <View style={styles.entrada}>
              <Text style={[styles.valor]}>Para:</Text>

              <Picker
                style={styles.picker}
                selectedValue={paraSelecao}
                onValueChange={(e) => setParaSelecao(e)}
              >
                <Picker.Item
                  style={styles.itemPicker}
                  label="Real"
                  value="Real"
                />
                <Picker.Item
                  style={styles.itemPicker}
                  label="Dólar"
                  value="Dolar"
                />
                <Picker.Item
                  style={styles.itemPicker}
                  label="Euro"
                  value="Euro"
                />
                <Picker.Item
                  style={styles.itemPicker}
                  label="BitCoin"
                  value="Bitcoin"
                />
              </Picker>
            </View>
          </View>

          <Text style={styles.resultado}>Resultado R$:{resultado}</Text>
        </View>
      </View>
    );
  }
}
