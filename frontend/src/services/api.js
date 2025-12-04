import axios from 'axios';

// Get API URL from environment variable or use production URL as fallback
const API_URL = import.meta.env.VITE_API_URL || 'https://porfolio-backend-server-deployment.vercel.app/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 second timeout
});

// Request interceptor for debugging
api.interceptors.request.use(
    (config) => {
        console.log(`🌐 API Request: ${config.method.toUpperCase()} ${config.baseURL}${config.url}`);
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor for debugging
api.interceptors.response.use(
    (response) => {
        console.log(`✅ API Response: ${response.status} ${response.config.url}`);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(`❌ API Error: ${error.response.status} ${error.response.config.url}`, error.response.data);
        } else if (error.request) {
            console.error('❌ No response received:', error.request);
        } else {
            console.error('❌ Request setup error:', error.message);
        }
        return Promise.reject(error);
    }
);

// API Methods
export const getProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const getSkills = async () => {
    try {
        const response = await api.get('/skills');
        return response.data;
    } catch (error) {
        console.error('Error fetching skills:', error);
        throw error;
    }
};

export const getContact = async () => {
    try {
        const response = await api.get('/contact');
        return response.data;
    } catch (error) {
        console.error('Error fetching contact:', error);
        throw error;
    }
};

export const sendMessage = async (messageData) => {
    try {
        const response = await api.post('/message/send', messageData);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export default api;
