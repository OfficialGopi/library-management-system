import { useEffect, useState } from "react";
import { addBook, deleteBook } from "../services/books.service";
import BookForm from "../components/BookForm";
import TableView from "../components/TableView";
import SearchBar from "../components/SearchBar";
import { useBooksContext } from "../contexts/BooksContext";

export default function BooksPage() {
  const { books, fetchBooks } = useBooksContext();
  const { loading } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAdd = async (book) => {
    await addBook(book);
    fetchBooks();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
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
      {
        <TableView
          data={filtered}
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
