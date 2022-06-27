import styled from "styled-components";

export const Wrapper = styled.div<{ align: string }>`
  display: flex;
  justify-content: ${(props) => props.align};
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-width: 10vw;
  margin-bottom: 2rem;
`;

export const Name = styled.p<{ align: string }>`
  margin: 0;
  display: flex;
  justify-content: ${(props) => props.align};
  font-size: x-small;
`;

export const Text = styled.p`
  background-color: #c9e4d4;
  padding: 10px;
  border-radius: 10px;
  margin: 0;
  font-size: 0.8em;
`;
