import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BreatheTypeProvider } from "./contexts/breathe-types.context";
import { MeditateProvider } from "./contexts/meditate.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BreatheTypeProvider>
      <MeditateProvider>
        <App />
      </MeditateProvider>
    </BreatheTypeProvider>
  </React.StrictMode>
);
