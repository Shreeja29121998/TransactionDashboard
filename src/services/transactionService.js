import { BASE_URL } from "./constants.js";
import { axiosInstance, handleApiResponse } from "../utils/networkUtils.js";

export const getAmount = (payload) =>
  axiosInstance
    .get(`${BASE_URL}/amount`, payload)
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));

export const getTransactions = (payload) =>
  axiosInstance
    .get(`${BASE_URL}/history/${payload.accountId}`)
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));

export const getTransactionsCount = (payload) =>
  axiosInstance
    .get(`${BASE_URL}/transactions/count/${payload.accountId}`)
    .then((response) => handleApiResponse(response))
    .catch((error) => handleApiResponse(error.response));
