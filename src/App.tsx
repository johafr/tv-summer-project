import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";
import { TestComponent } from "./components/TestComponent";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/Theme";

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
    <ThemeProvider theme={Theme}>
      {/*<h1 className="development">Under development</h1>*/}
      <Navbar />
      <Router />
    </ThemeProvider>
  );
};

export default App;
