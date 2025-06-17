import { createContext, useContext, useState } from "react";
import {} from "./../services/members.service";

const MembersContext = createContext();
const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMembers = async () => {
    setLoading(true);
    const response = "";
    if (response) {
      setMembers(response);
    }
    setLoading(false);
  };

  return (
    <MembersContext.Provider value={{ members, loading, fetchMembers }}>
      {children}
    </MembersContext.Provider>
  );
};

const useMembersContext = () => {
  const { members, loading, fetchMembers } = useContext(MembersContext);

  return { members, loading, fetchMembers };
};
export { MembersProvider, useMembersContext };
