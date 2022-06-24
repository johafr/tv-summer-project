import styled from "styled-components";

export const FormInput = styled.input`
  min-width: 25rem;
  padding-top: 2px;
  padding-left: 2px;
  line-height: 1em;
  margin-left:14px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ColorCircle = styled.div`
  position:relative;
  top:12.5px;
  width:10px;
  height:10px;
  border-radius:0%;
  box-shadow: 0 1px 1px rgba(0,0,0,0.2);

`;

