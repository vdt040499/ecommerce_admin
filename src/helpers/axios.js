import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store';
import authReducers from '../reducers/auth.reducers';
import { authConstants } from '../actions/constants';

const token = localStorage.getItem('token');
console.log('Token: ', token);

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `VoTan ${token}` : ''
    }
});

axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `VoTan ${auth.token}`;
    }
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
        localStorage.clear();
        store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
});

export default axiosInstance;