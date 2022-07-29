import styled from "styled-components";

export const EditRenderScreenToolbar = () => {
  return (
    <Toolbar>
      <TemplateHeader>Custom Template</TemplateHeader>
    </Toolbar>
  );
};

const Toolbar = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--middle-shadow-elevation-low);
`;

const TemplateHeader = styled.h3`
  justify-content: center;
  display: flex;
  position: absolute;
  left: 40%;
  width: 20%;
`;
