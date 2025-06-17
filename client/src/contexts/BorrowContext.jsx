import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const BorrowContext = createContext();

const BorrowProvider = ({ children }) => {
  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBorrows = async () => {
    setLoading(true);
    const response = "";
    if (response) {
      setBorrows(response);
    }
    setLoading(false);
  };
  return (
    <BorrowContext.Provider value={{ borrows, loading, fetchBorrows }}>
      {children}
    </BorrowContext.Provider>
  );
};

const useBorrowContext = () => {
  const { borrows, loading, fetchBorrows } = useContext(BorrowContext);
  return { borrows, loading, fetchBorrows };
};

export { BorrowProvider, useBorrowContext };
