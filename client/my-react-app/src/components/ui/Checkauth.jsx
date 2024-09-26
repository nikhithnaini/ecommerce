import { Navigate, useLocation } from "react-router-dom";

function Checkauth({ isAuthenticated, role, children }) {
  const location = useLocation();
  if (!isAuthenticated && location.pathname.includes("/home")) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated && location.pathname === "/admin") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default Checkauth;
