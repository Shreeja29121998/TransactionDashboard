import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import Pagination from "../../components/Pagination";

let pageSize = 2;

const Table = ({transactionCount}) => {
  const transactions = useSelector(
    (state) => state.transactions?.logIn?.transactions
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [currentTableData, setCurrentTableData] = useState([]);

  const time = (timestamp) => {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  useEffect(() => {
    if (!transactions) return;
    setTableData(transactions);
  }, [transactions, currentPage]);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    setCurrentTableData(tableData.slice(firstPageIndex, lastPageIndex));
  }, [tableData, currentPage]);

  return (
    <>
      <table id="Table" class="transaction-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Time</th>
            <th>Account Name</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.type.type}</td>
                <td>{time(item.timestamp)}</td>
                <td>UPI</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={transactionCount}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Table;
