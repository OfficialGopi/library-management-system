import { useEffect, useState } from "react";
import { addBook, deleteBook } from "../services/books.service";
import BookForm from "../components/BookForm";
import TableView from "../components/TableView";
import SearchBar from "../components/SearchBar";
import { useBooksContext } from "../contexts/BooksContext";

export default function BooksPage() {
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
  } = useBooksContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
    setFiltered(books);
    fetchBookCount();
    fetchUnBorrowedBooks();
    fetchMostBorrowedBooks();
  }, []);

  useEffect(() => {
    if (filtered.length === 0) {
      fetchBooks();
      setFiltered(books);
    } else {
      fetchBooks();
      handleSearch(search);
    }
  }, [search]);

  const handleAdd = async (book) => {
    await addBook(book);
    await fetchBooks();
    await fetchBookCount();
    await fetchUnBorrowedBooks();
    await fetchMostBorrowedBooks();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    await fetchBooks();

    await fetchBookCount();
    await fetchUnBorrowedBooks();
    await fetchMostBorrowedBooks();
  };

  const handleSearch = (query) => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltered(result);
  };

  return (
    <div>
      <h2 className="text-2xl mb-2 font-bold">Books</h2>
      <BookForm onSubmit={handleAdd} />

      <SearchBar placeholder="Search by title" onSearch={handleSearch} />
      <div className="w-full">
        <h3>Total Books: {bookCount.total_books}</h3>
        <h3>Un-borrowed Books: {unBorrowedBooks.length}</h3>
        <h3>Most borrowed Books: {mostBorrowedBooks.length}</h3>
      </div>

      {
        <TableView
          data={filtered.length === 0 && !search.length ? books : filtered}
          loading={loading}
          columns={[
            "book_id",
            "title",
            "author",
            "publisher",
            "year",
            "copies",
          ]}
          onDelete={handleDelete}
        />
      }
    </div>
  );
}
