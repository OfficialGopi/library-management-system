import toast from "react-hot-toast";
import { api, fetchHeaders, fetchRequestType } from "../constants/constants";

const addMember = async (member) => {
  try {
    const res = await fetch(api + "/members", {
      method: fetchRequestType.POST,
      headers: fetchHeaders,
      body: JSON.stringify(member),
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success("Member added successfully");
  } catch (err) {
    toast.error(err.message);
  }
};

const getAllMembers = async () => {
  try {
    const res = await fetch(api + "/members", {
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

const getActiveMembersCount = async () => {
  try {
    const res = await fetch(api + "/members/active-count", {
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

const searchMembersByName = async (name) => {
  try {
    const res = await fetch(api + `/members/search?name=${name}`, {
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

const getInactiveMembers = async () => {
  try {
    const res = await fetch(api + "/members/inactive", {
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

const getTopBorrower = async () => {
  try {
    const res = await fetch(api + "/members/top-borrower", {
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

const deleteMember = async (cardNumber) => {
  try {
    const res = await fetch(api + `/members/${cardNumber}`, {
      method: fetchRequestType.DELETE,
      headers: fetchHeaders,
    });
    const data = await res.json();
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    toast.success("Member deleted successfully");
  } catch (err) {
    toast.error(err.message);
  }
};

export {
  addMember,
  getAllMembers,
  getActiveMembersCount,
  searchMembersByName,
  getInactiveMembers,
  getTopBorrower,
  deleteMember,
};
