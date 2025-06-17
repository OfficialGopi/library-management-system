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
    <form onSubmit={handleSubmit}>
      <input
        name="card_number"
        placeholder="Card Number"
        value={member.card_number}
        onChange={handleChange}
        required
      />
      <input
        name="full_name"
        placeholder="Full Name"
        value={member.full_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={member.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={member.phone}
        onChange={handleChange}
      />
      <input
        name="dob"
        type="date"
        value={member.dob}
        onChange={handleChange}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
