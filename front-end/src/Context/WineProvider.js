import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WineContext = createContext();

export const useWineContext = () => {
  const context = useContext(WineContext);
  if (!context) {
    throw new Error('useWineContext must be used within a WineProvider');
  }
  return context;
};

export const WineProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const user_info = JSON.parse(localStorage.getItem("user"));
        setUser(user_info);
        console.log(user)
    
        if (!user_info) navigate("/");
     
      }, [ navigate]);

      return (
        <WineContext.Provider
            value={{
                user,
                setUser
            }}
            >
            {children}
        </WineContext.Provider>
      );
};
