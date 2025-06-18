import { useEffect, useState } from "react";
import {
  getAllMembers,
  addMember,
  deleteMember,
} from "../services/members.service";
import MemberForm from "../components/MemberForm";
import TableView from "../components/TableView";
import SearchBar from "../components/SearchBar";
import { useMembersContext } from "../contexts/MembersContext";

export default function MembersPage() {
  const {
    members,
    loading,
    fetchMembers,
    filtered,
    setFiltered,
    activeMembersCount,
    inactiveMembers,
    topBorrower,
    fetchActiveMembersCount,
    fetchInactiveMembers,
    fetchTopBorrower,
  } = useMembersContext();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMembers();
    setFiltered(members);
    fetchInactiveMembers();
    fetchTopBorrower();
    console.log(topBorrower);
    console.log(inactiveMembers);
  }, []);

  useEffect(() => {
    if (filtered.length === 0) {
      fetchMembers();
      setFiltered(members);
    } else {
      fetchMembers();
      handleSearch(search);
    }
  }, [search]);

  const handleAdd = async (member) => {
    await addMember(member);
    await fetchMembers();
  };

  const handleDelete = async (card_number) => {
    await deleteMember(card_number);
    await fetchMembers();
  };

  const handleSearch = (query) => {
    const result = members.filter((m) =>
      m.full_name.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltered(result);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Members</h2>
      <MemberForm onSubmit={handleAdd} />
      <SearchBar placeholder="Search by name" onSearch={handleSearch} />
      <div className="w-full">
        <h1 className="text-lg">Inactive Members: {inactiveMembers ?? 0}</h1>
        <h1 className="text-lg">
          Top Borrower Name: {topBorrower.full_name} {"|                   |"}
          Borrow Count: {topBorrower.borrow_count}
        </h1>
      </div>
      <TableView
        data={filtered.length === 0 && !search.length ? filtered : members}
        columns={[
          "card_number",
          "full_name",
          "email",
          "phone",
          "dob",
          "active",
        ]}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
}
