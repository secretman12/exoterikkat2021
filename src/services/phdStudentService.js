import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/phdStudent/';
class phdStudentService {
    login(username,password) {
      return axios
        .post(API_URL + 'login', {
          username: username,
          password: password
        })
        .then(response => {
          console.log(response.data);
          if (response.data) {
            localStorage.setItem('token', JSON.stringify(response.data));
          }

          return response.data;
        });
    }

    logout() {
      localStorage.removeItem('token');
    }
    getPhDStudent() {
      return axios.get(API_URL + 'whoami', { headers: authHeader() });
    }
    SaveTask(phd) {
      return axios
        .put(API_URL + 'modify/'+phd.id,
          phd
        )
        .then(response => {
          return response.data;
        });
    }
}
export default new phdStudentService();
