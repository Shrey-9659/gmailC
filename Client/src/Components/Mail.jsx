import React, { useContext } from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import messageContext from "../Context/messageContext";
import toast from "react-hot-toast";

const Mail = () => {
  const navigate = useNavigate();
  const {selectedEmail} = useContext(messageContext)
  const params = useParams()
  console.log( params.id)
  console.log(typeof params.id)

  const deleteHandler = async() => {
    try {
      const rawData = await fetch(`http://localhost:8080/api/v1/email/${params.id}`, {
        method: "DELETE",
        credentials: "include"
      })
      const res = await rawData.json()
      // console.log(res.message)
      navigate("/")
      toast.success(res.message);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/* Child 1 */}
      <div className=" flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={deleteHandler} className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft className=" hover:text-gray-500" size={"22px"} />
          <MdKeyboardArrowRight
            className=" hover:text-gray-500"
            size={"22px"}
          />
        </div>
      </div>

      {/* Child 2 */}
      <div className="h-[90vh] overflow-y-auto p-4">
        {/* Sub Child 1 */}
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className=" text-xl font-medium">{selectedEmail.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>

        
        <div className="text-gray-500 text-sm">
          <h1 className="">shreykhandelwal@gmail.com</h1>
          <span>to : {selectedEmail.to}</span>
        </div>
        <div className="my-10">
          <p>
            {selectedEmail.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
