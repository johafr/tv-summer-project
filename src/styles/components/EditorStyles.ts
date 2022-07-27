import styled from "styled-components";


export const MainContainer = styled.div`
  padding-top: 5vh;
  margin-top:20px;
  width: 100%;
  align-self: stretch;
  display:flex;
  flex-direction; column;
  border: 1px dashed gray;
`;

export const Wrapper = styled.div`
  width: 75%;
`;

export const Expandable = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  flex-grow: 1;
  margin-bottom:4%;
  

  & div {
    
  }
`;

export const IconContainer = styled.div`
  width: 20%;
  border-radius: 20px;

  & div {
    margin-top: 25%;
  }
  & div:hover {
    color:blue;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 0;
  width:80%;
`;

export const TextInput = styled.input`
  width: 99%;
  height: 4rem;
  border: none;
  margin:0;
  margin-top:1rem;
`;

export const ConvoName = styled.h5`
  width: 100%;
  height: 2rem;
  margin:0;
  border-bottom: 1px solid lightgray;
  border-radius-top:30px;
  text-align: left;

  & p {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top:0.4rem;
  }
  
`;

export const Output = styled.div`
  width: 50%;
  min-height: 100vh;
  background-color: rgba(201, 228, 212);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin-left: 1%;
`;