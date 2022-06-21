import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";
import { useRecoilState } from "recoil";
import { usernameState } from "../atoms/username";
import { auth } from "../Firebase";
import { Button } from "@mui/material";

export const Navbar: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUsername(user?.displayName);
    });
  }, []);

  return (
    <div className="navbar-container">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#267659" : "black",
        })}
      >
        Editor
      </NavLink>
      <NavLink
        to="/preview"
        style={({ isActive }) => ({
          borderBottom: isActive ? "6px double black" : "none",
          color: isActive ? "#267659" : "black",
        })}
      >
        Preview
      </NavLink>
      {username ? (
        <div>Logget inn som {username}</div>
      ) : (
        <Button variant="outlined" onClick={() => signInWithGoogle()}>
          Log in
        </Button>
      )}
    </div>
  );
};
