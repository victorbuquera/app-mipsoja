import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {SignUp} from '../../commom/auth';
import { ScrollView } from 'react-native-gesture-handler';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState(null);
  const [sobreNome, setSobreNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cel, setCel] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPasswordConfirmation] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [comoConheceuApp, setComoConheceuApp] = useState(null);
  const [finalidadeUso, setFinalidadeUso] = useState(null);
  const [passwordError, setPasswordError] = useState(false);


  useEffect(() => {
    if (password !== password_confirmation && password_confirmation !== '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, password_confirmation, passwordError]);

  async function handleRegister() {
  try {
    const response = await SignUp.Register(
      nome,
      sobreNome,
      email,
      cel,
      password,
      password_confirmation,
      cidade,
      estado,
      profissao,
      comoConheceuApp,
      finalidadeUso,
    );
    alert(JSON.stringfy(response));
    if (response) {
      alert(JSON.stringify(response));
      // Dispara a ação de login
      //dispatch({type: 'LOGIN', user: {email: email, token: response.token}});
    }else{
      alert(JSON.stringify(response.message));
    }
  } catch (error) {
    // Trata o erro de conexão aqui
    if (error.message === 'Network Error') {
      alert('Erro de conexão');
      throw error;
    }
    throw error;
  }
  }

  return (
    //Considerar separar o cadastro em mais de uma página 
    <View style={styles.container}>
        <Animatable.View style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
        </Animatable.View>

      <ScrollView>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Nome *</Text>
          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
            onChange={setNome}
            value={nome}
          />

          <Text style={styles.title}>Sobrenome *</Text>
          <TextInput
            placeholder="Digite o seu sobrenome"
            style={styles.input}
            onChange={setSobreNome}
            value={sobreNome}
          />

          <Text style={styles.title}>Email *</Text>
          <TextInput
            placeholder="Digite um email"
            style={styles.input}
            onChange={setEmail}
            value={email}
          />

          <Text style={styles.title}>Celular *</Text>
          <TextInput
            placeholder="Digite seu número de celular"
            style={styles.input}
            value={cel}
            onChange={setCel}
          />

          <Text style={styles.title}>Senha *</Text>
          <TextInput
            placeholder="Digite uma senha"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />

          <Animatable.View animation={passwordError ? 'shake' : undefined}>
            <Text style={styles.title}>Confirme sua senha *</Text>
            <TextInput
              placeholder="Confirme sua senha"
              secureTextEntry
              style={[
                styles.input,
                passwordError ? {borderColor: 'red'} : {borderColor: '#ccc'},
              ]}
              onChangeText={setPasswordConfirmation}
              value={password_confirmation}
            />
          </Animatable.View>

          <Text style={styles.title}>Cidade *</Text>
          <TextInput
            placeholder="Digite o nome da sua cidade"
            style={styles.input}
            onChangeText={setCidade}
            value={cidade}
          />

          <Text style={styles.title}>Estado *</Text>
          <TextInput
            placeholder="Digite o nome do seu estado"
            style={styles.input}
            onChangeText={setEstado}
            value={estado}
          />

        <Text style={styles.title}>Profissão *</Text>
          <TextInput
          //Colocar um seletor com opções pré definidas para padronização no banco de dados
            placeholder="Digite sua profissão"
            style={styles.input}
            onChangeText={setProfissao}
            value={profissao}
          />
          
          <Text style={styles.title}>Como você conheceu o aplicativo?</Text>
          <TextInput
          //Colocar um seletor com opções pré definidas para padronização no banco de dados
            placeholder="recomendação da firma, amigos, instagram etc"
            style={styles.input}
            onChangeText={setComoConheceuApp}
            value={comoConheceuApp}
          />
          <Text style={styles.title}>Qual a finalidade do uso?</Text>
          <TextInput
          //Colocar um seletor com opções pré definidas para padronização no banco de dados
            placeholder="Selecione finalidade do uso"
            style={styles.input}
            onChangeText={setFinalidadeUso}
            value={finalidadeUso}
          />
        </Animatable.View>
      </ScrollView>
      <View >
      <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleRegister}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('signIn')}>
            <Text style={styles.registerText}>Voltar para tela de login</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c874a',
    borderRadius: 4,
  },
  containerHeader: {
    marginTop: '5%',
    marginBottom: '5%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    marginTop: 25,
    marginBottom: -10,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 0,
  },
  /*
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 3,
  },*/
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#27ae61',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    marginBottom: 7
  },
  registerText: {
    color: '#fff',
  },
});