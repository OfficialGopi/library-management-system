import React, { useState } from "react";

const MemberForm = ({ onSubmit }) => {
  const [member, setMember] = useState({
    card_number: "",
    full_name: "",
    email: "",
    phone: "",
    dob: "",
    active: 1,
  });

  const handleChange = (e) =>
    setMember({ ...member, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(member);
    setMember({
      card_number: "",
      full_name: "",
      email: "",
      phone: "",
      dob: "",
      active: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-wrap text-md mb-2">
      <div className="flex items-center gap-2 ">
        <label htmlFor="card_number">Card Number</label>
        <input
          name="card_number"
          placeholder="Card Number"
          value={member.card_number}
          onChange={handleChange}
          className="p-2 border rounded-sm"
          required
        />
      </div>
      <div className="flex items-center gap-2 ">
        <label htmlFor="full_name">Full Name</label>
        <input
          name="full_name"
          placeholder="Full Name"
          value={member.full_name}
          onChange={handleChange}
          className="p-2 border rounded-sm"
          required
        />
      </div>
      <div className="flex items-center gap-2 ">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email"
          value={member.email}
          className="p-2 border rounded-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 ">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          placeholder="Phone"
          value={member.phone}
          className="p-2 border rounded-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 ">
        <label htmlFor="dob">Date of Birth</label>
        <input
          name="dob"
          type="date"
          className="p-2 border rounded-sm"
          value={member.dob}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="border p-2 rounded-sm hober:bg-black hover:text-white hover:bg-black transition"
      >
        Add Member
      </button>
    </form>
  );
};

export default MemberForm;
