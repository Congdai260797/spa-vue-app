// api/axios.js
import axios, { AxiosError } from 'axios'

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})


// Set up request interceptor
axiosInstance.interceptors.request.use(
  (config) => {

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
)

// Set up response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Process the returned data when successful
    // Example: return only the data part
    return response.data
  },
  (error) => {
    // Handle different error cases
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break

        default:
          return error.response
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
