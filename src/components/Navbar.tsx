import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signInWithGoogle, signOutWithGoogle } from "../Firebase";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import { auth } from "../Firebase";
import "../styles/components/Navbar.css";
import * as S from "../styles/components/NavbarStyles";
import { userIdRefState } from "../atoms/authentication";
import { AiFillHome } from "react-icons/ai";
import { activeStoryIndex } from "../atoms/stories";

export const Navbar: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const setUserId = useSetRecoilState(userIdRefState);
  const insideStory = useRecoilValue(activeStoryIndex);

  // Checks if the user is logged in, and sets the username if the person is logged in
  useEffect(() => {
    setUserId(auth.currentUser?.uid);
    auth.currentUser?.getIdToken().then((result) => {
      //console.log(result);
    });
    auth.onAuthStateChanged((user) => {
      setUsername(user?.displayName);
    });
  });

  const navigationStory = () => {
    return (
      <S.NavbarDiv>
        <NavLink
          to={"/story:" + insideStory + "/editor"}
          style={({ isActive }) => ({
            borderBottom: isActive ? "6px double black" : "none",
            color: isActive ? "#407178" : "black",
          })}
        >
          Editor
        </NavLink>
        <NavLink
          to={"/story:" + insideStory + "/preview"}
          style={({ isActive }) => ({
            borderBottom: isActive ? "6px double black" : "none",
            color: isActive ? "#407178" : "black",
          })}
        >
          Preview
        </NavLink>
        <NavLink
          to={"/story:" + insideStory + "/test"}
          style={({ isActive }) => ({
            borderBottom: isActive ? "6px double black" : "none",
            color: isActive ? "#267659" : "black",
          })}
        >
          Test
        </NavLink>
        <NavLink
          to={"/story:" + insideStory + "/testeditor"}
          style={({ isActive }) => ({
            borderBottom: isActive ? "6px double black" : "none",
            color: isActive ? "#267659" : "black",
          })}
        >
          WIP Editor
        </NavLink>
        <NavLink
          to={"/story:" + insideStory + "/create-template"}
          style={({ isActive }) => ({
            borderBottom: isActive ? "6px double black" : "none",
            color: isActive ? "#267659" : "black",
          })}
        >
          Create Template
        </NavLink>
      </S.NavbarDiv>
    );
  };

  // Navigation bar, with links to respective paths
  // Checks which link is active and styles the active link
  return (
    <S.Container className="navbar-container">
      <S.NavbarDiv>
        <NavLink to="/">
          <AiFillHome style={{ color: "#262626" }} />
        </NavLink>
      </S.NavbarDiv>
      {insideStory > -1 ? navigationStory() : null}
      {username && <S.NavbarDiv>Logged in as {username}</S.NavbarDiv>}
      {username ? (
        <S.NavbarButton onClick={() => signOutWithGoogle()}>
          Log Out
        </S.NavbarButton>
      ) : (
        <S.NavbarButton onClick={() => signInWithGoogle()}>
          Log In
        </S.NavbarButton>
      )}
    </S.Container>
  );
};
