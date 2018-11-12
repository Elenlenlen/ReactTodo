import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  LOGIN: 'api/auth/login',
  REGISTER: 'api/auth/register'
};

class AuthService extends BaseService {
  login = data => {
    return this.apiClient()
      .post(ENDPOINTS.LOGIN, data)
      .then(response => {
        const user = response.data.user;
        const token = response.data.access_token;

        this.api.attachHeaders({
          Authorization: `Bearer ${token}`
        });
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));

        return { ok: true, user };
      })
      .catch(error => {
        alert(error);
        return { ok: false, data };
      });
  };

  register = async data => {
    return this.apiClient()
      .post(ENDPOINTS.REGISTER, data)
      .then(() => {
        return { ok: true };
      })
      .catch(() => {
        return { ok: false };
      });
  };

  logout = async () => {
    return new Promise((resolve, reject) => {
      try {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('token');
      } catch (error) {
        reject(error);
      }
      this.api.removeHeaders(['Authorization']);
      resolve({ ok: true });
    });
  };
}

const authService = new AuthService();
export default authService;
