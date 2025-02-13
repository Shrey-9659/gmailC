import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../Context/userContext";

const Profile = () => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    // console.log(user)

    const handleLogoutSubmit = async (e) => {
        e.preventDefault();
        const rawData = await fetch("http://localhost:8080/api/v1/user/logout", {
            credentials: "include"
        })
        const res = await rawData.json();
        toast.success(res.message)
        setUser(null)
        localStorage.clear();
        navigate("/login")   
    }

  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form
        onSubmit={handleLogoutSubmit}
        action=""
        className=" flex flex-col gap-3 bg-white p-4 w-[22%]"
      >
        <h1 className=" font-bold text-2xl uppercase my-2">Profile Page</h1>
        <p>User Name</p>
        <input
        //   onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border border-gray-400 rounded-md px-2 py-1"
          defaultValue={user.fullname}
          readOnly
        />
        <p>Email</p>
        <input
        //   onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
          defaultValue={user.email}
          readOnly
        />
        <button
          type="submit"
          className=" bg-gray-800 p-2 text-white my-2 rounded-md"
        >
          Logout
        </button>
      </form>
    </div>
  )
}

export default Profile