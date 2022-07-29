import styled from "styled-components";
import { drawerWidth } from "./TemplateDrawer";
import { EditChangeNameOfTemplate } from "./templateDrawerComponents/EditChangeNameOfTemplate";
import { EditPremadeTemplatesList } from "./templateDrawerComponents/EditPremadeTemplatesList";

export const EditTemplateDrawer = () => {
  return (
    <Drawer>
      <EditChangeNameOfTemplate />
      <EditPremadeTemplatesList />
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--left-shadow-elevation-low);
  position: relative;
  height: 89vh;
`;
