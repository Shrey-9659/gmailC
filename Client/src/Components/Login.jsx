import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../Context/userContext";

const Login = () => {
  const {user, setUser} = useContext(userContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
useEffect(() => {
  if(user){
    console.log("User exist")
    navigate("/profile")
  } 
}, [])

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const rawData = await fetch("https://gmail-clone-ggn9.onrender.com/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials : "include",
        body: JSON.stringify({ email, password }),
      });
      const response = await rawData.json();
      if(response.success){
        setUser(response.user)
        navigate("/")
        toast.success(response.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        onSubmit={handleLoginSubmit}
        action=""
        className=" flex flex-col gap-3 bg-white p-4 w-[22%]"
      >
        <h1 className=" font-bold text-2xl uppercase my-2">Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className=" bg-gray-800 p-2 text-white my-2 rounded-md"
        >
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link className=" text-blue-600" to={"/signup"}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
