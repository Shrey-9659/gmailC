import React, { useContext } from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import messageContext from "../Context/messageContext";

const Email = ({email}) => {
  const navigate = useNavigate();
  const {setSelectedEmail} = useContext(messageContext)
  const openMail = () => {
    setSelectedEmail(email)
    navigate(`/mail/${email._id}`);
  };
  return (
    <div
      onClick={openMail}
      className=" flex items-center justify-between border-b border-gray-200
       px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      {/* Child 1 */}
      <div className=" flex items-center gap-2 ">
        <div className=" text-gray-400">
          <MdCropSquare size={"22px"} />
        </div>
        <div className=" text-gray-400">
          <RiStarSLine size={"22px"} />
        </div>
        <div>
          <h1 className=" font-semibold ">{email?.subject}</h1>
        </div>
      </div>

      {/* Child 2 */}
      <div className="flex-1 ml-4">
        <p>
          {email?.message}
        </p>
      </div>

      {/* Child 3 */}
      <div className=" flex-none text-gray-500 text-sm">
        <p>12 days ago</p>
      </div>
    </div>
  );xc 
};

export default Email;
