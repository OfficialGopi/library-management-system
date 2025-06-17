import { useState } from "react";
import { tabOptionsEnum, tabOptions } from "./constants/constants";
import BooksPage from "./pages/BooksPages";
import MembersPage from "./pages/MembersPage";
import BorrowPage from "./pages/BorrowPage";

const App = () => {
  const [tabOptionsSelect, setTabOptionsSelect] = useState(tabOptions.BOOKS);
  return (
    <div className="w-[1024px] mx-auto ">
      <div className="w-full  flex flex-col items-center border rounded-lg">
        <h1 className="text-3xl font-bold ">Inventory Control System</h1>
        <div className="mt-2 float-right p-2">
          <select
            className="border rounded-sm p-2 border-neutral-500 outline-none"
            value={tabOptionsSelect}
            onChange={(e) => setTabOptionsSelect(e.target.value)}
          >
            {tabOptionsEnum.map((key) => (
              <option
                key={key}
                value={key}
                className="rounded-lg border border-neutral-400 bg-slate-200"
              >
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full p-4 ">
          {tabOptionsSelect === tabOptions.BOOKS && <BooksPage />}
          {tabOptionsSelect === tabOptions.MEMBERS && <MembersPage />}
          {tabOptionsSelect === tabOptions.BORROW && <BorrowPage />}
        </div>
      </div>
    </div>
  );
};

export default App;
