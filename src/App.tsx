import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";
import { Test } from "./screens/Test";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/Theme";
import { EditorSplitscreen } from "./components/EditorSplitscreen";
import { Home } from "./screens/Home";

const Router: React.FC = () => {
  useEffect(() => {
    // window.location.href.indexOf("story") > -1
    //   ? setInstory(true)
    //   : setInstory(false);
  });
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Editor />} path={"story:id/editor"} />
        <Route element={<Preview />} path={"story:id/preview"} />
        <Route element={<Test />} path={"story:id/test"} />
        <Route element={<EditorSplitscreen />} path={"story:id/testeditor"} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Router />
    </ThemeProvider>
  );
};

export default App;
