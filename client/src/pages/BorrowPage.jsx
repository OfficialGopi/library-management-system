import { useEffect, useState } from "react";
import {
  addBorrowRecord,
  deleteBorrowRecord,
} from "../services/borrow.service";
import BorrowForm from "../components/BorrowForm";
import TableView from "../components/TableView";
import { useBorrowContext } from "../contexts/BorrowContext";

export default function BorrowPage() {
  const { borrows, fetchBorrows, loading, borrowSummary, fetchBorrowSummary } =
    useBorrowContext();

  useEffect(() => {
    fetchBorrows();
  }, []);

  const handleAdd = async (record) => {
    await addBorrowRecord(record);
    await fetchBorrows();
  };

  const handleDelete = async (borrow_id) => {
    await deleteBorrowRecord(borrow_id);
    await fetchBorrows();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Borrow Records</h2>
      <BorrowForm onSubmit={handleAdd} />
      <TableView
        data={borrows}
        columns={[
          "borrow_id",
          "book_id",
          "card_number",
          "borrow_date",
          "due_date",
          "returned_on",
        ]}
        loading={loading}
        onDelete={handleDelete}
      />
    </div>
  );
}
