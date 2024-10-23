import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  
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
      if (response.status === 200) {
        const data = await response.json();
        setUser(data)
        setToken(currentToken);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("authToken");
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
      fetchEmployees();
      fetchVacancies();
    } else {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      fetchEmployees();
      fetchVacancies();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken();
    setIsAuthenticated(false);
  };

  const fetchWithToken = async (endpoint, method = "GET", payload) => {
    if (token) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}${endpoint}`,
          {
            method,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        if (response.ok && response.status !== 204) {
          return response.json();
        }
      } catch (error) {
        console.error(`Error getting employees`, error);
      }
    }
  };
  const fetchEmployees = async () => {
    try {
      const data = await fetchWithToken("/employees");
      setEmployees(data);
    } catch (error) {
      console.error("Error getting employees", error);
    }
  };
  const fetchVacancies = async () => {
    try {
      const data = await fetchWithToken("/vacancies");
      setVacancies(data);
    } catch (error) {
      console.error("Error getting employees", error);
    }
  };
  useEffect(() => {
    if (needRefresh && !isLoading) {
      fetchEmployees();
      fetchVacancies();
      setNeedRefresh(false);
    }
  }, [needRefresh, isLoading]);

  return (
    <SessionContext.Provider
      value={{
        setToken,
        isAuthenticated,
        fetchWithToken,
        logout,
        needRefresh,
        setNeedRefresh,
        employees,
        vacancies,
        user,
        isLoading,
        verifyToken,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
