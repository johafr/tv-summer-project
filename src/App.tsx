import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";
import { TestComponent } from "./components/TestComponent";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Editor />} path={"/"} />
        <Route element={<Preview />} path={"/preview"} />
        <Route element={<TestComponent />} path={"/test"} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <h1 className="development">Under development</h1>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
