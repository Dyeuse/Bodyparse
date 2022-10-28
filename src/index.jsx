import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./style/main.scss";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
