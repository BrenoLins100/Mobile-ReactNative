import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Image,
} from "react-native";

import { Camera } from "expo-camera";

//icones expo
import { FontAwesome } from "@expo/vector-icons";

//permissoes
import * as MediaLibrary from "expo-media-library";

import * as Location from "expo-location";

import * as ImagePicker from "expo-image-picker";

export default function App() {
  //referencia da camera
  const camRef = useRef(null);

  //iniciando a camera com a camera traseira
  const [type, setType] = useState(Camera.Constants.Type.back);

  //permissão para a camera
  const [hasPermission, setHasPermission] = useState(null);
  const [fotoTirada, setFotoTirada] = useState(null);

  const [imagemAlbum, setImagemAlbum] = useState(null);

  const [abrir, setAbrir] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado.</Text>;
  }

  async function tirarFoto() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      //pegando uri da foto
      setFotoTirada(data.uri);
      //abrir modal
      setAbrir(true);
      //console.log(data)
    }
  }

  async function salvarFoto() {
    const asset = await MediaLibrary.createAssetAsync(fotoTirada)
      .then(() => {
        alert("Foto salva com sucesso!");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const acessarAlbum = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [6, 6],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImagemAlbum(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              //girando camera
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>Girar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 50,
              left: 20,
            }}
            onPress={acessarAlbum}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>Album</Text>
          </TouchableOpacity>

          {imagemAlbum && (
            <Image
              source={{ uri: imagemAlbum }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </Camera>

      <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
        <FontAwesome name="camera" size={23} color="#fff" />
      </TouchableOpacity>

      {fotoTirada && (
        <Modal animationType="slide" transparent={false} visible={abrir}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View style={{ margin: 10, flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => {
                  setAbrir(false);
                }}
              >
                <FontAwesome name="window-close" size={50} color="red" />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 10 }} onPress={salvarFoto}>
                <FontAwesome name="upload" size={50} color="#121212" />
              </TouchableOpacity>
            </View>

            <Image
              style={{ width: 300, height: 300, borderRadius: 20 }}
              source={{ uri: fotoTirada }}
            />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    margin: 20,
    height: 50,
    borderRadius: 10,
  },
});
