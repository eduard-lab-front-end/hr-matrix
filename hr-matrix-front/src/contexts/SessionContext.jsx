import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      localStorage.setItem("authToken", token);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);
  const verifyToken = async (currentToken) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );
      if(response.status === 200) {
        setToken(currentToken)
      } else {
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem('authToken');
    }
  };
  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
    }
  }, []);

  const logout = () => {
    setToken();
    localStorage.removeItem('authToken');
  }

  return (
    <SessionContext.Provider value={{ setToken, isAuthenticated, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
