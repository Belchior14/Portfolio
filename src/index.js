import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HomePage, InfoPage, ProjectsPage,AchievPapge } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/achiev" element={<AchievPapge/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
