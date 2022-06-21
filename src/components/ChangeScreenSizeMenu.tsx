import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ChangeScreenSizeMenu: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleOpenModal = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {clicked ? (
        <Table>
          <TableHeader>
            <SpanHeader style={{ color: "black" }}>
              Change screen format
            </SpanHeader>
            <KeyboardArrowDownIcon
              sx={{ marginRight: 1, color: "black" }}
              onClick={() => setClicked(false)}
            />
          </TableHeader>
          <TableBody>
            <ContentRow>Iphone 13</ContentRow>
            <ContentRow>Ipad</ContentRow>
            <ContentRow>Samsung galaxy 10</ContentRow>
            <ContentRow>Desktop</ContentRow>
          </TableBody>
          <TableFooter>
            <CloseButton onClick={() => setClicked(false)}>Close</CloseButton>
          </TableFooter>
        </Table>
      ) : (
        <Button onClick={handleOpenModal}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
      )}
    </>
  );
};

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #232333;
  border: none;
`;

const Table = styled.table`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  width: 220px;
  border-radius: 5px;
`;

const TableHeader = styled.thead`
  border-bottom: 1px solid black;
  justify-content: space-between;
  display: flex;
`;

const TableBody = styled.tbody`
  background-color: white;
`;

const TableFooter = styled.tfoot`
  background-color: #ffffff;
  border-top: 1px solid black;
  color: black;
`;

const SpanHeader = styled.span`
  margin-left: 5px;
  margin-bottom: 5px;
`;

const ContentRow = styled.button`
  color: black;
  width: 100%;
  background-color: white;
  border: none;
  &:hover {
    background-color: #d3d3d3;
    border-radius: 5px;
  }
`;

const CloseButton = styled.button`
  width: 30%;
  background-color: white;
  border: none;
  margin-left: 3px;
  margin-bottom: 3px;
  &:hover {
    background-color: #d3d3d3;
    border-radius: 5px;
  }
`;
