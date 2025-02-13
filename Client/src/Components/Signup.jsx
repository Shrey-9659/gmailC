import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:8080/api/v1/user/register", {
        method: "POST",
        credentials : "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      })
        .then((rawData) => rawData.json())
        .then((res) => {
          if(!res.success){
            setError(res.message)
            toast.error(res.message)
          } else {
            navigate("/login")
            toast.success(res.message)
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  // const data = await response.json();
  // console.log(data);
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        action=""
        onSubmit={handleSignupSubmit}
        className=" flex flex-col gap-3 bg-white p-4 w-[22%]"
      >
        <h1 className=" font-bold text-2xl uppercase my-2">Signup</h1>
        {error ? <h3 className=" text-red-500 font-bold">{error}</h3> : ""}
        <input
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
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
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link className=" text-blue-600" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
