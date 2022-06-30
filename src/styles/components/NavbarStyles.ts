import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 4rem;
  width: 100%;
`;

export const NavbarDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavbarButton = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  height: 2rem;
  width: 4rem;

  background-color: rgba(64, 113, 120, 0.8);
  color: white;
  &:hover {
    background-color: rgba(64, 113, 120, 1);
  }
`;
