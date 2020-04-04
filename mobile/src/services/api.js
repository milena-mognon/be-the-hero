import axios from 'axios';

const api = axios.create({
  /** Se utilizar o celular para emular o app, modifique o IP (192.168.0.102)
   * para o IP local do seu computador.
   * Se utilizar emulador, troque para localhost
   */
  baseURL: 'http://192.168.0.102:3333',
});

export default api;
