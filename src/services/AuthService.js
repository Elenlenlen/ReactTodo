import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  LOGIN: 'api/auth/login'
};

class AuthService extends BaseService {
  login = async data => {
    return this.apiClient()
      .post(ENDPOINTS.LOGIN, data)
      .then(response => {
        this.api.attachHeaders({
          Authorization: `Bearer ${response.data.access_token}`
        });
        var user = store(response.data.access_token);

        return { ok: true, user };
      })
      .catch(error => {
        return { ok: false, data };
      });
  };
}

function store(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  var user = JSON.parse(window.atob(base64)).user;

  AsyncStorage.setItem('token', token);
  AsyncStorage.setItem('user', JSON.stringify(user));

  return user;
}

const authService = new AuthService();
export default authService;
