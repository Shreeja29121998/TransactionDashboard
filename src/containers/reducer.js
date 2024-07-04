import { produce } from "immer";
import { combineReducers } from "redux";
import * as CONSTANTS from "./constants.js";

export const initialState = {
  userInformation: {
    user: "",
    password: "",
    loading: false,
    success: false,
  },
  accountId: null,
  totalAmount: 0,
  transactions: null,
  transactionCount: 0,
};

const logInReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case CONSTANTS.LOGIN_INITIATED:
        return {
          ...state,
          userInformation: {
            user: "",
            password: "",
            loading: true,
            success: false,
          },
        };
      case CONSTANTS.LOGIN_SUCCESS:
        return {
          ...state,
          userInformation: {
            user: action.payload.userInfo.user,
            password: action.payload.userInfo.password,
            loading: false,
            success: true,
          },
          accountId: action.payload.userInfo.accountId,
        };
      case CONSTANTS.LOGIN_FAILURE:
        return {
          ...state,
          userInformation: {
            user: "",
            password: "",
            loading: false,
            success: false,
          },
          accountId: null,
        };
      case CONSTANTS.REGISTER_INITIATED:
        return {
          ...state,
          userInformation: {
            user: "",
            password: "",
            loading: true,
            success: false,
          },
        };
      case CONSTANTS.AMOUNT_FETCHED:
        return {
          ...state,
          totalAmount: action.payload.amount,
        };
      case CONSTANTS.TRANSACTIONS_FETCHED:
        return {
          ...state,
          transactions: [
            ...(state.transactions ?? []),
            ...action.payload.transactions,
          ],
        };
      case CONSTANTS.TRANSACTIONS_COUNT_FETCHED:
        return {
          ...state,
          transactionCount: action.payload.transactionCount,
        };
      default:
        return state;
    }
  });

const reducer = combineReducers({
  logIn: logInReducer,
});

export default reducer;
