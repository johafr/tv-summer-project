import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  border: 1px solid #adadad;
  border: none;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const Table = styled.table`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  width: 220px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid black;
  justify-content: space-between;
  display: flex;
`;

export const TableBody = styled.tbody`
  background-color: white;
`;

export const TableFooter = styled.tfoot`
  background-color: #ffffff;
  border-top: 1px solid black;
  color: black;
`;

export const SpanHeader = styled.span`
  margin-left: 5px;
  margin-bottom: 5px;
  color: "black";
`;

export const ContentRow = styled.button`
  color: black;
  width: 100%;
  background-color: white;
  border: none;
  &:hover {
    background-color: #d3d3d3;
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
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
