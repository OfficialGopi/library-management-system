import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getAllBooks } from "../services/books.service";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const fetchBooks = async () => {
    setLoading(true);
    const response = await getAllBooks();
    if (response) {
      setBooks(() => response);
    }
    setLoading(false);
  };
  return (
    <BooksContext.Provider value={{ books, loading, fetchBooks, filtered }}>
      {children}
    </BooksContext.Provider>
  );
};

const useBooksContext = () => {
  const { books, loading, fetchBooks, filtered } = useContext(BooksContext);
  return { books, loading, fetchBooks };
};

export { BooksProvider, useBooksContext };
