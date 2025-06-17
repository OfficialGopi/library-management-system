import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BooksProvider } from "./contexts/BooksContext.jsx";
import { MembersProvider } from "./contexts/MembersContext.jsx";
import { BorrowProvider } from "./contexts/BorrowContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPages.jsx";
// import MembersPage from "./pages/MembersPage.jsx";
// import BorrowPage from "./pages/BorrowPage.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <MembersProvider>
      <BorrowProvider>
        <BooksProvider>
          <Toaster position="top-right" />
          <App />
        </BooksProvider>
      </BorrowProvider>
    </MembersProvider>
  </>,
);
