import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://tictactoe-21dd9.firebaseio.com'
});
export default instance;
