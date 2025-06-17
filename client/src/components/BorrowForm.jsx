import React, { useState } from 'react';

const BorrowForm = ({ onSubmit }) => {
  const [borrow, setBorrow] = useState({
    book_id: "", card_number: "", due_date: ""
  });

  const handleChange = e => setBorrow({ ...borrow, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(borrow);
    setBorrow({ book_id: "", card_number: "", due_date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="book_id" placeholder="Book ID" value={borrow.book_id} onChange={handleChange} required />
      <input name="card_number" placeholder="Card Number" value={borrow.card_number} onChange={handleChange} required />
      <input name="due_date" type="date" value={borrow.due_date} onChange={handleChange} required />
      <button type="submit">Add Borrow</button>
    </form>
  );
};

export default BorrowForm;