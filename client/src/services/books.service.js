import toast from "react-hot-toast";
import { api, fetchHeaders, fetchRequestType } from "../constants/constants";

const getAllBooks = async () => {
  try {
    const res = await fetch(api + "/books", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const getBookCount = async () => {
  try {
    const res = await fetch(api + "/books/count", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const searchBooksByTitle = async (title) => {
  try {
    const res = await fetch(api + `/books/search?title=${title}`, {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const getUnborrowedBooks = async () => {
  try {
    const res = await fetch(api + "/books/unborrowed", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const getMostBorrowedBook = async () => {
  try {
    const res = await fetch(api + "/books/most-borrowed", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const addBook = async (book) => {
  try {
    const res = await fetch(api + "/books", {
      method: fetchRequestType.POST,
      headers: fetchHeaders,
      body: JSON.stringify(book),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    toast.success("Book added successfully");
  } catch (err) {
    toast.error(err.message);
  }
};

const deleteBook = async (id) => {
  try {
    const res = await fetch(api + `/books/${id}`, {
      method: fetchRequestType.DELETE,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    toast.success("Book deleted successfully");
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

export {
  getAllBooks,
  getBookCount,
  searchBooksByTitle,
  getUnborrowedBooks,
  getMostBorrowedBook,
  addBook,
  deleteBook,
};
