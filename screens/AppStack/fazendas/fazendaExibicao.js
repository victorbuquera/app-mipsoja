import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { clearToken } from "../../../commom/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

// exemplo de fazendas em formato de objeto
const fazendasExemplo = [
  {
    id: 1,
    nome: "Fazenda A",
    imagem: require("../../../assets/map.png"),
    localizacao: "Cidade A, Estado A",
    culturas: ["Soja", "Milho"],
    talhoes: 15,
  },
  {
    id: 2,
    nome: "Fazenda B",
    imagem: require("../../../assets/map.png"),
    localizacao: "Cidade B, Estado B",
    culturas: ["Algodão"],
    talhoes: 10,
  },
  {
    id: 3,
    nome: "Fazenda C",
    imagem: require("../../../assets/map.png"),
    localizacao: "Cidade C, Estado C",
    culturas: ["Café", "Cana-de-açúcar", "Feijão"],
    talhoes: 20,
  },
];

const FazendasScreen = () => {
  const [fazendas, setFazendas] = useState(fazendasExemplo);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = async (dispatch) => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(clearToken());
    } catch (error) {
      throw error;
    }
  };

  // Função para buscar as fazendas do armazenamento local
  const getFazendasFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@fazendas");
      if (value !== null) {
        setFazendas(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Função para buscar as fazendas do webservice e atualizar o armazenamento local
  const atualizarFazendas = async () => {
    try {
      const response = await axios.get("https://api.meuservico.com/fazendas");
      const fazendasAtualizadas = response.data;
      await AsyncStorage.setItem(
        "@fazendas",
        JSON.stringify(fazendasAtualizadas)
      );
      setFazendas(fazendasAtualizadas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFazendasFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {fazendas.map((fazenda) => (
          <TouchableOpacity key={fazenda.id} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={fazenda.imagem} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.nomeFazenda}>{fazenda.nome}</Text>
              <Text style={styles.localizacao}>{fazenda.localizacao}</Text>
              <View style={styles.culturasContainer}>
                {fazenda.culturas.map((cultura, index) => (
                  <Text key={index} style={styles.cultura}>
                    {cultura}
                  </Text>
                ))}
              </View>
              <Text style={styles.talhoes}>{fazenda.talhoes} talhões</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={atualizarFazendas}>
          <Text style={styles.atualizarText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CadastroFazenda")}
        >
          <Text style={styles.buttonText}>Cadastrar fazenda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout(dispatch)}>
          <Text style={styles.atualizarText}>logout </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  atualizarText: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  nomeFazenda: {
    fontSize: 18,
    fontWeight: "bold",
  },
  localizacao: {
    fontSize: 16,
    color: "#777",
  },
  culturasContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  cultura: {
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginRight: 5,
    padding: 5,
    color: "#555",
  },
  talhoes: {
    marginTop: 5,
    fontSize: 16,
    color: "#777",
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FazendasScreen;
