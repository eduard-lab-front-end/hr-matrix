import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [isVerifying, setIsVerifying] = useState(true);

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
      if (response.status === 200) {
        setToken(currentToken);
      } else {
        localStorage.removeItem("authToken");
      }
      setIsVerifying(false);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    fetchEmployees();
    fetchVacancies();
    if (localToken) {
      verifyToken(localToken);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const logout = () => {
    setToken();
    localStorage.removeItem("authToken");
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
    if (needRefresh && !isVerifying) {
      fetchEmployees();
      fetchVacancies();
      setNeedRefresh(false);
    }
  }, [needRefresh, isVerifying]);

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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
