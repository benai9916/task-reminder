import axios from 'axios';

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: 'https://reemind-webapp.herokuapp.com/'})

// const API = axios.create({ baseURL: 'http://localhost:5000/'})

export const fetchTask  = () => API.get('/api/task');
export const addTask = (newDetail) => API.post('/api/task', newDetail);
export const updateTask  = (id, updateDetail ) =>  API.patch(`/api/task/${id}`, updateDetail);
export const deleteTask  = (id) => API.delete(`/api/task/${id}`);


export const signIn  = (formData) => API.post('/auth/signin', formData);
export const signUp  = (formData) => API.post('/auth/signup', formData);
export const signOut  = (formData) => API.get('/auth/signout', formData);
