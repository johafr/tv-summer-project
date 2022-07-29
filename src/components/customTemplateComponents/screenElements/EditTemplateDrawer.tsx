import styled from "styled-components";
import { drawerWidth } from "./TemplateDrawer";
import { EditSaveButton } from "./templateDrawerComponents/EditSaveButton";

export const EditTemplateDrawer = () => {
  return (
    <Drawer>
      <EditSaveButton />
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--left-shadow-elevation-low);
  position: relative;
  height: 89vh;
`;
