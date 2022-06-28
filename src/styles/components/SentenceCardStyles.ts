import styled from "styled-components";

export const Wrapper = styled.div<{ align: string }>`
  display: flex;
  justify-content: ${(props) => props.align};
`;

export const DialogContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-width: 12vw;
`;

export const TextContainer = styled.div`
  max-width: 100%;
  text-align: center;
`;

export const Name = styled.p<{ align: string }>`
  margin: 0;
  display: flex;
  justify-content: ${(props) => props.align};
  font-size: x-small;
`;

export const Dialog = styled.p`
  background-color: #d3d3d3;
  padding: 10px;
  border-radius: 10px;
  margin: 0;
  font-size: 0.8em;
`;

export const Text = styled.p`
  font-size: 0.8rem;
`;
