import * as CONSTANTS from "../containers/constants.js";

export const logInInitiated = (payload) => ({
  type: CONSTANTS.LOGIN_INITIATED,
  payload,
});

export const registerInitiated = (payload) => ({
  type: CONSTANTS.REGISTER_INITIATED,
  payload,
});

export const logInSuccess = (payload) => ({
  type: CONSTANTS.LOGIN_SUCCESS,
  payload,
});

export const logInFailure = (payload) => ({
  type: CONSTANTS.LOGIN_FAILURE,
  payload,
});

export const getDetails = (payload) => ({
  type: CONSTANTS.GET_DETAILS,
  payload,
});

export const amountFetched = (payload) => ({
  type: CONSTANTS.AMOUNT_FETCHED,
  payload,
});

export const transactionsFetched = (payload) => ({
  type: CONSTANTS.TRANSACTIONS_FETCHED,
  payload,
});
export const transactionCountFetched = (payload) => ({
  type: CONSTANTS.TRANSACTIONS_COUNT_FETCHED,
  payload,
});
