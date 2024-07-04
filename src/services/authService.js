import { BASE_URL } from './constants.js';
import { axiosInstance, handleApiResponse } from '../utils/networkUtils.js';

export const register = (payload) =>
  axiosInstance
    .post(`${BASE_URL}/register`, payload)
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));

export const login = (payload) =>
  axiosInstance
    .post(`${BASE_URL}/login?name=${payload.user}&password=${payload.password}`, {})
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));

export const logout = (payload) =>
  axiosInstance
    .post(`${BASE_URL}/logout`, payload)
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));
