import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroFazenda() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSalvar = async(
    nome,
    cidade,
    estado
  ) => {
    try {
      // enviar os dados para o servidor
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Fazenda:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Cidade:</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

      <Text style={styles.label}>Estado:</Text>
      <TextInput style={styles.input} value={estado} onChangeText={setEstado} />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFB534',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
