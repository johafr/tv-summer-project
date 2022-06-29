import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signInWithGoogle, signOutWithGoogle } from "../Firebase";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import { auth } from "../Firebase";
import { Button } from "@mui/material";
import "../styles/components/Navbar.css";
import * as S from "../styles/components/NavbarStyles";
import { userIdRefState } from "../atoms/authentication";

export const Navbar: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [userId, setUserId] = useRecoilState(userIdRefState);


  // Checks if the user is logged in, and sets the username if the person is logged in
  useEffect(() => {
    setUserId(auth.currentUser?.uid);
    auth.currentUser?.getIdToken().then((result) =>  {
      //console.log(result);
    })
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
      <NavLink
        to="/testeditor"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#267659" : "black",
        })}
      >
        WIP Editor
      </NavLink>
      {username && <S.LoggedInDiv>Logged in as {username}</S.LoggedInDiv>}
      {username ? (
        <Button onClick={() => signOutWithGoogle()}>Log Out</Button>
      ) : (
        <Button onClick={() => signInWithGoogle()}>Log In</Button>
      )}
    </S.Container>
  );
};
