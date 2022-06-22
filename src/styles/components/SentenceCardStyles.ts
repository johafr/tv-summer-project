import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  max-width: 10vw;
  margin-bottom: 2rem;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  background-color: #c9e4d4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
  margin: 0;
  font-size: 0.8em;
`;
