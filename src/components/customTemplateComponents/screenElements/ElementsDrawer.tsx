import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { DrawerInteractionList } from "../DrawerInteractionList";

export const drawerWidth = 20;

export const ElementsDrawer = () => {
  return (
    <Drawer>
      <ElementHeader>Elements</ElementHeader>
      <DrawerElements>
        <InteractionsHeader>
          Interaction <MenuOpenIcon />
        </InteractionsHeader>
        <DrawerInteractionList />
      </DrawerElements>
    </Drawer>
  );
};

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

const ElementHeader = styled.h2`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  min-width: 20%;
  height: 3rem;
`;

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--left-shadow-elevation-low);
`;
