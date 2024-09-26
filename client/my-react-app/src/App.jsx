import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Approute from "@/routes/Approute";
import Home from "./pages/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Approute />
    </div>
  );
}

export default App;
