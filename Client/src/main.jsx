import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MessageContextProvider from "./Context/MessageContextProvider.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
    </UserContextProvider>
  </StrictMode>
);
