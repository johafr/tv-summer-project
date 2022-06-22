import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import { auth } from "../Firebase";
import { Button } from "@mui/material";
import "../styles/components/Navbar.css";
import * as S from "../styles/components/NavbarStyles";

export const Navbar: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameState);

  // Checks if the user is logged in, and sets the username if the person is logged in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUsername(user?.displayName);
    });
  }, []);

  // Navigation bar, with links to respective paths
  // Checks which link is active and styles the active link
  return (
    <S.Container className="navbar-container">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#407178" : "black",
        })}
      >
        Editor
      </NavLink>
      <NavLink
        to="/preview"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#407178" : "black",
        })}
      >
        Preview
      </NavLink>
      <NavLink
        to="/test"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#267659" : "black",
        })}
      >
        Test
      </NavLink>
      {username ? (
        <S.LoggedInDiv>Logget inn som {username}</S.LoggedInDiv>
      ) : (
        <Button onClick={() => signInWithGoogle()}>Log in</Button>
      )}
    </S.Container>
  );
};
