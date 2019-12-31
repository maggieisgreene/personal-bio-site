import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const demTechs = response.data;
      const technologies = [];
      Object.keys(demTechs).forEach((techId) => {
        demTechs[techId].id = techId;
        technologies.push(demTechs[techId]);
      });
      resolve(technologies);
    })
    .catch((error) => reject(error));
});

export default { getTech };
