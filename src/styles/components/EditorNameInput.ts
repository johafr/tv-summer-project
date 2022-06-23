import styled from "styled-components";

export const NameList = styled.div`
  width: 25.3rem;
  height: 14.5rem;
  overflow: auto;
  margin-bottom:10px;
`;

export const ListParent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  
`;

export const List = styled.li`
  position: relative;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 120px;
  border-radius: 15px;
  flex-grow:2;
  align-self: center;
  
  box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    font-weight: bold !important;
    cursor:pointer;
  }

  & .editor__deletePerson {
    opacity:0%;
    text-align: right;
    position:absolute;
    right:5px;
    color:black;
  }

  &:hover .editor__deletePerson {
    opacity: 100%;
  }
`;


export const NameForm = styled.div`
`;

export const Input = styled.input`
  width: 25rem;
  height: 1.9rem;
  border-radius: 15px;
  border: none;
  box-shadow: 1px 2px 2px 1px rgba(0,0,0,0.2);
  text-align: center;
`;
