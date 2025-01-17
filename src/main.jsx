import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileProvider } from "./Context/MobileContext.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MobileProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </MobileProvider>
  </StrictMode>
);
