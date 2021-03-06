import styled from "styled-components";

export const NameList = styled.div<{width? : number}>`
  position: relative;
  min-width: 25.3rem;
  width: ${(props) => props.width}%
  min-height: 5.9rem;
  max-height: 14.5rem;
  overflow: auto;
  margin-bottom: 10px;

  & .s_listParent__chromepicker {
    position: fixed;
    width: 20em;
    height: 15rem;
    top: 6rem;
    left: 30rem;
    bottom: 0;
    right: 1;
  }
`;

export const ListParent = styled.ul`
  display: flex;
  position: relative;
  flex-flow: row wrap;
`;

export const List = styled.li`
  position: relative;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 8rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    //cursor: pointer;
  }

  & .editor__deletePerson {
    opacity: 0%;
    text-align: right;
    position: absolute;
    right: 5px;
    color: black;
  }

  &:hover .editor__deletePerson {
    opacity: 100%;
  }
`;

export const NameForm = styled.div`
  padding-left: 2.8rem;
`;

export const Input = styled.input`
  width: 25rem;
  height: 1.9rem;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    border: 1px solid gray;
  }
`;
