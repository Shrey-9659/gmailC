import React, { useState, useEffect } from 'react';
import userContext from './userContext';

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null; 
  });


  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
