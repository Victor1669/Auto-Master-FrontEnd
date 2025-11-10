import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(userData) {
    setUser(userData);
    navigate("/v1/home", { replace: true });
  }
  function logout() {
    setUser(null);
    navigate("/login", { replace: true });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context == undefined)
    throw new Error("AuthContext usado fora do AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
