import { useEffect, useState } from "react";
import {
  getAllBorrowRecords,
  addBorrowRecord,
  deleteBorrowRecord,
} from "../services/borrow.service";
import BorrowForm from "../components/BorrowForm";
import TableView from "../components/TableView";

export default function BorrowPage() {
  const [borrows, setBorrows] = useState([]);

  const fetchBorrows = async () => {
    const res = await getAllBorrowRecords();
    setBorrows(res.data.borrowRecords);
  };

  useEffect(() => {
    fetchBorrows();
  }, []);

  const handleAdd = async (record) => {
    await addBorrowRecord(record);
    fetchBorrows();
  };

  const handleDelete = async (borrow_id) => {
    await deleteBorrow(borrow_id);
    deleteBorrowRecord();
  };

  return (
    <div>
      <h2>Borrow Records</h2>
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
        onDelete={handleDelete}
      />
    </div>
  );
}
