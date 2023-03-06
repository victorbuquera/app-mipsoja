import axios from 'axios';
import { SecureStore } from 'expo-secure-store';

//LINUX - IP PARA CONEXÂO INTRANET:
  //-ifconfig | grep inet
  //inet 192.168.0.***
//Windows wifi: cmd>ipconfig> Adaptador de Rede sem Fio Wi-Fi > Endereço IPv4
//IP PARA CONEXÂO VIA EMULADOR ANDROID STUDIO http://10.0.3.2
const Login = {
  async auth(email, password) {
    try {
      const response = await axios.post('http://192.168.89.254/api/login', {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

const SignUp = {
  async Register(nome, sobreNome, email, cel, password, password_confirmation, cidade, estado, profissao, comoConheceuApp, finalidadeUso) {
    try {
      const response = await axios.post('http://192.168.0.102/api/register', {
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
        finalidadeUso
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export { Login, SignUp };
/*  */