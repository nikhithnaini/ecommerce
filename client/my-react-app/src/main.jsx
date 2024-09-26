import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";
import { Button } from "./components/ui/button.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
    <Toaster />
  </Provider>
);
