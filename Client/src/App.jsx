import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Inbox from "./Components/Inbox";
import LearnTailwind from "./assets/LearnTailwind";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Mail from "./Components/Mail";
import SendEmail from "./Components/SendEmail";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element : <Login />
  }, 
  {
    path : "/signup",
    element : <Signup />
  }
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
    </div>
  );
}

export default App;
