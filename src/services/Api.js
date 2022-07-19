import Axios from 'axios';
import md5 from 'md5';

const keyPublic = '00c88e4799a412ceeaf6cee2fe93476f';
const keyPrivate = '7f68858e8fc969ce4937a230b5d6ded26fa2d4a8';

const time = Number(new Date());
const hash = md5(time + keyPrivate + keyPublic);

const api = Axios.create
(
  {
    baseURL:'http://gateway.marvel.com/v1/public/',
    params:
    {
      ts:time,
      apikey: keyPublic,
      hash: hash,
    }
  }
);

export default api;
