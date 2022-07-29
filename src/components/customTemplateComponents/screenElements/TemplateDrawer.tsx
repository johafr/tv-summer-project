import styled from "styled-components";

import { CreateNewTemplateField } from "./templateDrawerComponents/CreateNewTemplateField";
import { PremadeTemplatesList } from "./templateDrawerComponents/PremadeTemplatesList";
import { CustomTemplatesList } from "./templateDrawerComponents/CustomTemplatesList";

export const drawerWidth = 20;

export const TemplateDrawer = () => {
  return (
    <Drawer>
      <CustomizeHeader>Templates</CustomizeHeader>
      <PremadeTemplatesList />
      <CustomTemplatesList />
      <CreateNewTemplateDiv>
        <CreateNewTemplateField />
      </CreateNewTemplateDiv>
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--left-shadow-elevation-low);
  position: relative;
  height: 89vh;
`;

const CreateNewTemplateDiv = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;
