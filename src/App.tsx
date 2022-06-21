import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Editor />} path={"/"} />
        <Route element={<Preview />} path={"/preview"} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
