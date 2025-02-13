import React, { useContext, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import messageContext from '../Context/messageContext'


const SendEmail = () => {
    const {open, setOpen} = useContext(messageContext);
    const [to, setTo] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = () => {
        fetch("https://gmail-clone-ggn9.onrender.com/api/v1/email/create", {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            credentials: "include",
            body : JSON.stringify({to, subject, message})
        })
    }

  return (
    <div className={`${open ? "block" : "hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
        <div className=' flex items-center justify-between px-3 py-2 bg-[#F2F6FC]'>
            <h1>New Message</h1>
            <div onClick={() => setOpen(false)} className=' p-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
                <RxCross2 size={"20px"}/>
            </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col p-3 gap-2'>
            <input onChange={(e) => setTo(e.target.value)} type="text" placeholder='To' className='outline-none py-1'/>
            <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' className='outline-none py-1'/>
            <textarea onChange={(e) => setMessage(e.target.value)} rows={'13'} cols={'30'} className='outline-none py-1'></textarea>
            <button className=' flex items-start bg-blue-500 w-min py-2 px-4 rounded-xl text-white hover:bg-blue-700'>Send</button>
        </form>
    </div>
  )
}

export default SendEmail