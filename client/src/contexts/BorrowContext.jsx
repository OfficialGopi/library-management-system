import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  getAllBorrowRecords,
  getBorrowSummary,
} from "../services/borrow.service";

const BorrowContext = createContext();

const BorrowProvider = ({ children }) => {
  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [borrowSummary, setBorrowSummary] = useState([]);

  const fetchBorrowSummary = async () => {
    const response = await getBorrowSummary();
    if (response) {
      setBorrowSummary(response);
    }
  };

  const fetchBorrows = async () => {
    setLoading(true);
    const response = await getAllBorrowRecords();
    if (response) {
      setBorrows(response);
    }
    setLoading(false);
  };
  return (
    <BorrowContext.Provider
      value={{
        borrows,
        loading,
        fetchBorrows,
        borrowSummary,
        fetchBorrowSummary,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
};

const useBorrowContext = () => {
  const { borrows, loading, fetchBorrows, borrowSummary, fetchBorrowSummary } =
    useContext(BorrowContext);
  return { borrows, loading, fetchBorrows, borrowSummary, fetchBorrowSummary };
};

export { BorrowProvider, useBorrowContext };
