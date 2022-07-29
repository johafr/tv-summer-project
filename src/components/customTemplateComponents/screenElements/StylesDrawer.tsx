import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { drawerWidth } from "./TemplateDrawer";
import { DrawerCommunicationCustomizationList } from "./stylesDrawerComponents/DrawerCommunicationCustomizationList";

export const StylesDrawer = () => {
  return (
    <Drawer>
      <CustomizeHeader>Styles</CustomizeHeader>
      <DrawerElements>
        <InteractionsHeader>
          Interactions
          <MenuOpenIcon />
        </InteractionsHeader>
        <DrawerCommunicationCustomizationList />
        <InteractionsHeader>
          Background
          <MenuOpenIcon />
        </InteractionsHeader>
      </DrawerElements>
    </Drawer>
  );
};

const CustomizeHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;

const DrawerElements = styled.div`
  min-width: ${drawerWidth}%;
  overflow: auto;
`;

const InteractionsHeader = styled.h3`
  justify-content: center;
  display: flex;
  gap: 5%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: auto;
`;

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--right-shadow-elevation-low);
`;
