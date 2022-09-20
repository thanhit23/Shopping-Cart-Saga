import axios from 'axios';

const URL_API = 'https://6323d438bb2321cba91f86da.mockapi.io/api/v1/';

const CallAPI = (endpoint, method = 'GET', body) => {
  return axios({
    method,
    url: `${URL_API}${endpoint}`,
    data: body,
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
};

export default CallAPI;
