import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Editor />} path={"/"} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
