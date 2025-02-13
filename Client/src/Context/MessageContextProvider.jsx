import React, { useState, useEffect } from 'react';
import messageContext from './messageContext';

const MessageContextProvider = ({ children }) => {

  const [open, setOpen] = useState(() => {
    const savedOpen = localStorage.getItem('messageOpen');
    return savedOpen ? JSON.parse(savedOpen) : null; 
  });

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('emails');
    return savedEmail ? JSON.parse(savedEmail) : null; 
  });

  const [selectedEmail, setSelectedEmail] = useState(() => {
    const savedSelectedEmail = localStorage.getItem('selectedEmail');
    return savedSelectedEmail ? JSON.parse(savedSelectedEmail) : null; 
  });


  useEffect(() => {
    if (open === null) {
      localStorage.removeItem('messageOpen');
    }
    if (email === null) {
      localStorage.removeItem('emails');
    }
    if (selectedEmail === null) {
      localStorage.removeItem('selectedEmail');
    }
  }, [open, email, selectedEmail]);


  useEffect(() => {

    if (open !== null) {
      localStorage.setItem('messageOpen', JSON.stringify(open));
    }
    if (email !== null) {
      localStorage.setItem('emails', JSON.stringify(email));
    }
    if (selectedEmail !== null) {
      localStorage.setItem('selectedEmail', JSON.stringify(selectedEmail));
    }
  }, [open, email, selectedEmail]);

  return (
    <messageContext.Provider value={{ open, setOpen, email, setEmail, selectedEmail, setSelectedEmail }}>
      {children}
    </messageContext.Provider>
  );
};

export default MessageContextProvider;
