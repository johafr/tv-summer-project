import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Editor />} path={"/"} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
