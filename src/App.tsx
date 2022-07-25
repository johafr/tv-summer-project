import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";
import { Test } from "./screens/Test";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/Theme";
import { EditorSplitscreen } from "./components/EditorSplitscreen";
import { Home } from "./screens/Home";
import { CreateCustomTemplate } from "./screens/CreateCustomTemplate";
import { renderScreen, screenDimensions } from "./atoms/screenDimensions";
import { useRecoilValue } from "recoil";
import { AiFillHome } from "react-icons/ai";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Editor />} path={"story:id/editor"} />
        <Route element={<Preview />} path={"story:id/preview"} />
        <Route element={<Test />} path={"story:id/test"} />
        <Route
          element={<CreateCustomTemplate />}
          path={"story:id/create-template"}
        />
        {/* <Route
          element={
            <TestComponent
              name={"Cornelius"}
              text={"Men jeg skal ikke reise!"}
            />
          }
          path={"story:id/test"}
        /> */}
        <Route element={<EditorSplitscreen />} path={"story:id/testeditor"} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  const screen = useRecoilValue(screenDimensions);
  useEffect(() => {
    window.addEventListener("resize", renderScreen);

    return () => {
      window.removeEventListener("resize", renderScreen);
    };
  }, [window.innerWidth]);
  console.log("screen width in app:", screen.winWidth);
  return (
    <ThemeProvider theme={Theme}>
      {screen.winWidth > 650 ? (
        <div>
          <Navbar />
          <Router />
        </div>
      ) : (
        <div>
          <NavLink
            to={"/"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <AiFillHome
              style={{
                padding: "5px",
                color: "#262626",
              }}
            />
          </NavLink>
          <Router />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
