import { call, takeLatest, put, all, spawn } from "redux-saga/effects";

import * as CONSTANTS from "./constants";
import * as SERVICE from "../services/authService";
import * as ACTION from "./action";
import { getAmount, getTransactions, getTransactionsCount as transactionCountService } from "../services/transactionService";

export function* getLoginApiStart(action) {
  try {
    const response = yield call(SERVICE.login, action.payload);
    if (response.success) {
      yield put(
        ACTION.logInSuccess({
          userInfo: response.data,
        })
      );
    }
  } catch (error) {
    console.log("getLoginApiStart", error);
  }
}

export function* registerInitiatedApiStart(action) {
  try {
    const response = yield call(SERVICE.register, action.payload);
    if (response.success) {
      action.payload.openRegister(false);
      action.payload.openLogin(true);
    }
  } catch (error) {
    console.log("registerInitiatedApiStart", error);
  }
}

export function* getDetailApiStart(action) {
  try {
    yield all([
      call(getAmtApiStart, action.payload),
      call(getTransactionsCount, action.payload),
      spawn(getTransactionsApiStart, action.payload),
    ]);
  } catch (error) {
    console.log("getDetailApiStart", error);
  }
}

export function* getTransactionsApiStart(action) {
  try {
    const response = yield call(getTransactions, action.payload);
    if (true) {
      yield put(
        ACTION.transactionsFetched({
          transactions: response,
        })
      );
    }
  } catch (error) {
    console.log("getTransactionsApiStart", error);
  }
}

export function* getTransactionsCount(action) {
  try {
    const response = yield call(transactionCountService, action.payload);
    if (response) {
      yield put(
        ACTION.transactionCountFetched({
          transactionCount: response,
        })
      );
    }
  } catch (error) {
    console.log("getTransactionsCount", error);
  }
}
export function* getAmtApiStart(action) {
  try {
    const response = yield call(getAmount, action.payload);
    if (response) {
      yield put(
        ACTION.amountFetched({
          amount: response,
        })
      );
    }
  } catch (error) {
    console.log("getAmtApiStart", error);
  }
}

// Individual exports for testing
export default function* getWorksheetsForWorkbookApiStartWatcher() {
  yield takeLatest(CONSTANTS.LOGIN_INITIATED, getLoginApiStart);
  yield takeLatest(CONSTANTS.REGISTER_INITIATED, registerInitiatedApiStart);
  yield takeLatest(CONSTANTS.GET_DETAILS, getDetailApiStart);
}
