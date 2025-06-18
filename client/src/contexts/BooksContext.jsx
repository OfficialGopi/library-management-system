import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  getAllBooks,
  getBookCount,
  getUnborrowedBooks,
  getMostBorrowedBook,
} from "../services/books.service";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [bookCount, setBookCount] = useState(0);
  const [unBorrowedBooks, setUnBorrowedBooks] = useState([]);
  const [mostBorrowedBooks, setMostBorrowedBooks] = useState([]);

  const fetchBookCount = async () => {
    const response = await getBookCount();
    if (response) {
      setBookCount(response);
    }
  };

  const fetchUnBorrowedBooks = async () => {
    const response = await getUnborrowedBooks();
    if (response) {
      setUnBorrowedBooks(response);
    }
  };

  const fetchMostBorrowedBooks = async () => {
    const response = await getMostBorrowedBook();
    if (response) {
      setMostBorrowedBooks(response);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    const response = await getAllBooks();
    if (response) {
      setBooks(response);
    }
    setLoading(false);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        loading,
        fetchBooks,
        filtered,
        setFiltered,
        bookCount,
        unBorrowedBooks,
        mostBorrowedBooks,
        fetchBookCount,
        fetchUnBorrowedBooks,
        fetchMostBorrowedBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

const useBooksContext = () => {
  const {
    books,
    loading,
    fetchBooks,
    filtered,
    setFiltered,
    bookCount,
    unBorrowedBooks,
    mostBorrowedBooks,
    fetchBookCount,
    fetchUnBorrowedBooks,
    fetchMostBorrowedBooks,
  } = useContext(BooksContext);
  return {
    books,
    loading,
    fetchBooks,
    filtered,
    setFiltered,
    bookCount,
    unBorrowedBooks,
    mostBorrowedBooks,
    fetchBookCount,
    fetchUnBorrowedBooks,
    fetchMostBorrowedBooks,
  };
};

export { BooksProvider, useBooksContext };
