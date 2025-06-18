import { useState } from "react";
import { useBooksContext } from "../contexts/BooksContext";
import { useMembersContext } from "../contexts/MembersContext";

const BorrowForm = ({ onSubmit }) => {
  const [borrow, setBorrow] = useState({
    book_id: "",
    card_number: "",
    due_date: "",
  });

  const { books } = useBooksContext();
  const { members, fetchMembers } = useMembersContext();

  const handleChange = (e) =>
    setBorrow({ ...borrow, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(borrow);
    setBorrow({ book_id: "", card_number: "", due_date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap mb-2">
      <div className="flex gap-2 items-center mb-2">
        <label htmlFor="book_id">Book ID</label>
        <select
          name="book_id"
          id="book_id"
          className="p-2 border rounded-sm"
          value={borrow.book_id}
          onChange={handleChange}
        >
          <option value="">Select a book</option>
          {books.map((book) => (
            <option value={book.book_id}>
              {book.title + "(" + book.book_id + ")"}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <select
          name="card_number"
          id="card_number"
          className="p-2 border rounded-sm"
          value={borrow.card_number}
          onChange={handleChange}
        >
          <option value="">Select a Card Number</option>
          {members.map((member) => (
            <option value={member.card_number}>
              {member.card_number + "(" + member.full_name + ")"}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="due_date">Due Date</label>
        <input
          className="p-2 border rounded-sm"
          name="due_date"
          type="date"
          value={borrow.due_date}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2 border rounded-sm hover:bg-black hover:text-white transition"
      >
        Add Borrow
      </button>
    </form>
  );
};

export default BorrowForm;
