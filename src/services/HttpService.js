import axios from 'axios';

class HttpService {
  constructor() {
    this.client = axios.create({ baseURL: 'http://todo.test' });
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headers) {
    headers.forEach(header => {
      delete this.client.defaults.headers[header];
    });
  }
}

const httpService = new HttpService();
export default httpService;
