import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./table.js";
import { getDetails } from "../../containers/action.js";
import "./style.css";
import Loader from "../../components/Loader/index.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const accountId = useSelector(
    (state) => state.transactions?.logIn?.accountId
  );
  const amount = useSelector((state) => state.transactions?.logIn?.totalAmount);
  const count = useSelector(
    (state) => state.transactions?.logIn?.transactionCount
  );
  const userInformation = useSelector(
    (state) => state.transactions?.logIn?.userInformation
  );

  useEffect(() => {
    if (!accountId) return;
    dispatch(getDetails(accountId));
  }, [dispatch, accountId]);

  return (
    <>
      {amount === 0 ? (
        <Loader />
      ) :
        <div>
          {amount && (
            <div class="card">
              <h2>Welcome, {userInformation.user}</h2>
              <p>Your total amount in the bank: ${amount.toLocaleString()}</p>
            </div>
          )}
          <Table transactionCount={count} />
        </div>
      }
    </>
  );
};
export default Dashboard;
