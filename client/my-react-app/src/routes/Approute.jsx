import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Checkauth from "@/components/ui/Checkauth";
import Login from "@/pages/login/Login";
import Notfound from "@/pages/Notfound";
import Register from "@/pages/register/Register";
import { useSelector } from "react-redux";

function Approute() {
  const { isAuthenticated, ...data } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Checkauth isAuthenticated={isAuthenticated}>
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
