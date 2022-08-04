import React from "react";
import ReactDOM from "react-dom/client";
import NameEtc from "./NameEtc";
import SchoolEtc from "./SchoolEtc";
import Work from "./Work";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameEtc />
    <SchoolEtc />
    <Work />
  </React.StrictMode>
);
