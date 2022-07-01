import axios from 'axios';

const apiUrl = 'http://192.168.18.2:8080';

const getVideosList = async () => {
  const {data} = await axios.get(`${apiUrl}/videos`);
  return data;
};

export {getVideosList};
