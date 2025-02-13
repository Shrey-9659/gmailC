import React, { useContext } from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails'
import messageContext from '../Context/messageContext'

const Emails = () => {
  const {email} = useContext(messageContext)
  useGetAllEmails();
  return (
    <div>
      {email && email?.map((mail) => <Email key={mail._id} email={mail}/>)}
    </div>
  )
}

export default Emails