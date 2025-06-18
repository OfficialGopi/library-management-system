import toast from "react-hot-toast";
import { api, fetchHeaders, fetchRequestType } from "../constants/constants";

const addBorrowRecord = async (record) => {
  try {
    const res = await fetch(api + "/borrow", {
      method: fetchRequestType.POST,
      headers: fetchHeaders,
      body: JSON.stringify(record),
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success("Borrow record added");
  } catch (err) {
    toast.error(err.message);
  }
};

const getAllBorrowRecords = async () => {
  try {
    const res = await fetch(api + "/borrow", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const getBorrowSummary = async () => {
  try {
    const res = await fetch(api + "/borrow/summary", {
      method: fetchRequestType.GET,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

const deleteBorrowRecord = async (id) => {
  try {
    const res = await fetch(api + `/borrow/${id}`, {
      method: fetchRequestType.DELETE,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success("Borrow record deleted");
    return data.data;
  } catch (err) {
    toast.error(err.message);
  }
};

export {
  addBorrowRecord,
  getAllBorrowRecords,
  getBorrowSummary,
  deleteBorrowRecord,
};
