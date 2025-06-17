import { useEffect, useState } from "react";
import {
  getAllMembers,
  addMember,
  deleteMember,
} from "../services/members.service";
import MemberForm from "../components/MemberForm";
import TableView from "../components/TableView";
import SearchBar from "../components/SearchBar";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchMembers = async () => {
    const res = await getAllMembers();
    setMembers(res.data.members);
    setFiltered(res.data.members);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleAdd = async (member) => {
    await addMember(member);
    fetchMembers();
  };

  const handleDelete = async (card_number) => {
    await deleteMember(card_number);
    fetchMembers();
  };

  const handleSearch = (query) => {
    const result = members.filter((m) =>
      m.full_name.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltered(result);
  };

  return (
    <div>
      <h2>Members</h2>
      <MemberForm onSubmit={handleAdd} />
      <SearchBar placeholder="Search by name" onSearch={handleSearch} />
      <TableView
        data={filtered}
        columns={[
          "card_number",
          "full_name",
          "email",
          "phone",
          "dob",
          "active",
        ]}
        onDelete={handleDelete}
      />
    </div>
  );
}
