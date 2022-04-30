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

export async function createUser(user) {
  const response = await axios.post(`${API}/cadastro`, user);
  return response.user;
}