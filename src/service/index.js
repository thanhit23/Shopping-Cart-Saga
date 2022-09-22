import axios from 'axios';

class Service {
  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError,
    );
  }

  handleSuccess = res => res;

  handleError = err => Promise.reject(err);

  get = url => this.instance.get(url);

  post = (url, body) => this.instance.post(url, body);
}

export default new Service();
