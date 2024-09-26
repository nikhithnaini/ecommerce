import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Checkauth from "@/components/ui/Checkauth";
import Login from "@/pages/login/Login";
import Notfound from "@/pages/Notfound";
import Register from "@/pages/register/Register";

function Approute() {
  const details = {
    isAuthenticated: false,
    name: "nikhith",
    role: "user",
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Checkauth
              isAuthenticated={details.isAuthenticated}
              role={details.role}
            >
              <Home />
            </Checkauth>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default Approute;
