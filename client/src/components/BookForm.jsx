import { useState } from "react";

function BookForm({ onSubmit }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    copies: 1,
  });

  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({
      book_id: "",
      title: "",
      author: "",
      publisher: "",
      year: "",
      copies: 1,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  mb-2 gap-4 flex-wrap text-lg"
    >
      <div className="flex gap-2 items-center ">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="p-2 border rounded-sm"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2 items-center ">
        <label htmlFor="author">Author</label>
        <input
          name="author"
          className="p-2 border rounded-sm"
          placeholder="Author"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2 items-center ">
        <label htmlFor="publisher">Publisher</label>
        <input
          name="publisher"
          placeholder="Publisher"
          onChange={handleChange}
          className="p-2 border rounded-sm"
        />
      </div>
      <div className="flex gap-2 items-center ">
        <label htmlFor="year">Year</label>
        <input
          name="year"
          type="number"
          placeholder="Year"
          onChange={handleChange}
          className="p-2 border rounded-sm"
        />
      </div>
      <div className="flex gap-2 items-center ">
        <label htmlFor="copies">Copies</label>
        <input
          name="copies"
          className="p-2 border rounded-sm"
          type="number"
          defaultValue={1}
          onChange={handleChange}
        />
      </div>
      <button
        className="border mb-2 w-40 rounded-sm hover:bg-black hover:text-white transition"
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
