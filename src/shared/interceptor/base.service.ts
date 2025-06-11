import axiosInstance from './base.interceptor'

export class BaseService {
  constructor() { }

  async get(endpoint: any) {
    const response = await axiosInstance.get(`${endpoint}`)
    return response
  }

  async post(endpoint: any, data: any) {
    const response = await axiosInstance.post(`${endpoint}`, data)
    return response
  }

  async put(endpoint: any, data: any) {
    const response = await axiosInstance.put(`${endpoint}`, data)
    return response
  }

  async delete(endpoint: any) {
    const response = await axiosInstance.delete(`${endpoint}`)
    return response
  }
}
