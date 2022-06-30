import styled from "styled-components";

export const DisplayScreenContainer = styled.div`
  position: relative;
  left: 10rem;
  top: 2rem;
  width: 160px;
  height: 570px;
  align-items: center;
  display: flex;
  //background-color: red;
`;

export const ParentDiv = styled.div`
  display: flex;
  position: relative;
`;

export const Editor = styled.div`
  margin: 10px;
  width: 40.5rem;
  position: relative;
`;

export const TextForm = styled.div`
  margin-top: 20px;
  padding: 15px;
  width: 40rem;
  border-bottom: 2px solid black;
`;

export const DeletePageButton = styled.button``;

export const Button = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  background-color: #508188;
  color: white;
  margin: 0.5rem;
  
  &:hover {
  background-color: #407178;
  cursor: pointer;
`;
