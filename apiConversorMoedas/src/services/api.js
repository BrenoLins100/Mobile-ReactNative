import axios from 'axios';
 
//http://localhost:3333/tasks
 
const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br'
});


 
export default api;