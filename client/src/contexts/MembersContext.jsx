import { createContext, useContext, useState } from "react";
import {
  getActiveMembersCount,
  getAllMembers,
  getInactiveMembers,
  getTopBorrower,
} from "./../services/members.service";

const MembersContext = createContext();
const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeMembersCount, setActiveMembersCount] = useState(0);
  const [inactiveMembers, setInactiveMembers] = useState(0);
  const [topBorrower, setTopBorrower] = useState(0);

  const fetchActiveMembersCount = async () => {
    const response = await getActiveMembersCount();
    if (response) {
      setActiveMembersCount(response);
    }
  };

  const fetchInactiveMembers = async () => {
    const response = await getInactiveMembers();
    if (response) {
      setInactiveMembers(response);
    }
  };

  const fetchTopBorrower = async () => {
    const response = await getTopBorrower();
    if (response) {
      setTopBorrower(response);
    }
  };

  const fetchMembers = async () => {
    setLoading(true);
    const response = await getAllMembers();
    if (response) {
      setMembers(response);
    }
    setLoading(false);
  };

  return (
    <MembersContext.Provider
      value={{
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
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

const useMembersContext = () => {
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
  } = useContext(MembersContext);

  return {
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
  };
};
export { MembersProvider, useMembersContext };
