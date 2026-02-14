import axios from 'axios';

const api = axios.create({
  // Ensure this is set to http://localhost:5000 in your .env file
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

// --- CRITICAL FIX: Add Token to every request automatically ---
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Auth endpoints
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (data) => api.post('/auth/register', data);

// Lesson endpoints
export const getLessons = () => api.get('/lessons');

// Submission endpoints
export const submitCode = (codeData) => api.post('/submissions', codeData);

// Progress endpoints
export const getProgress = (userId) => api.get(`/progress/${userId}`);

// --- ADDED THIS MISSING EXPORT ---
// This connects to the route we created in user.routes.js
export const updateStats = (statsData) => api.put('/user/stats', statsData); 

export default api;