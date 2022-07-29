import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Editor } from "./screens/Editor";
import { Preview } from "./screens/Preview";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/Theme";
import { Home } from "./screens/Home";
import { CreateCustomTemplate } from "./screens/CreateCustomTemplate";
import { renderScreen, screenDimensions } from "./atoms/screenDimensions";
import { useRecoilValue } from "recoil";
import { AiFillHome } from "react-icons/ai";
import { Person } from "./atoms/Characters";
import { DialogFormatTextHeavyLarge } from "./components/customTemplateComponents/formats/dialogFormats/DialogFormatTextHeavyLarge";
import { DialogFormatRegular } from "./components/customTemplateComponents/formats/dialogFormats/DialogFormatRegular";

const TestPerson: Person = {
  id: -5,
  name: "TESTY",
  color: "#000000",
  align: "left",
};

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Editor />} path={"story:id/editor"} />
        <Route element={<Preview />} path={"story:id/preview"} />
        <Route
          element={
            <DialogFormatRegular
              format={["test", "test"]}
              content={"Men jeg skal ikke reise!"}
              id={-5}
              person={TestPerson}
            />
          }
          path={"/dontosh"}
        />
        <Route
          element={<CreateCustomTemplate />}
          path={"story:id/create-template"}
        />
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
