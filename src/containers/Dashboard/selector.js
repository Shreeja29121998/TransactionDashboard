// import reducer from "../reducer";
import { createSelector } from "reselect";

const selectTransactions = (state) => state?.logIn?.transactions;

const makeSelectTransactions = () =>
  createSelector(selectTransactions, (transactions) => transactions);

export default makeSelectTransactions;
