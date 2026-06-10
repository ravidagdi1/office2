import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:3001/api/v1`,
  timeout: 50000,
  headers: {
    authorization:`${localStorage.getItem('authToken')}`,
    
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Retrieve token from local storage
  const token = localStorage.getItem('authToken');

  // Add token to the headers if available
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;
