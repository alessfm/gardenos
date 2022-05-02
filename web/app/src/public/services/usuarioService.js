const axios = require('axios')
const API = 'http://localhost:8000'

// export async function getAllUsers() {

//   try {
//     const response = await axios.get('/api/users');
//     console.log('response  ', response)
//     return response.data;
//   } catch (error) {
//     return [];
//   }

// }

export async function criarUsuario(usuario) {
  const resposta = await axios.post(`${API}/cadastrar`, usuario);
  return resposta.usuario;
}