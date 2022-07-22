import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { DrawerInteractionList } from "../DrawerInteractionList";

export const drawerWidth = 20;

export const ElementsDrawer = () => {
  return (
    <Drawer>
      <InteractionsHeader>
        Interaction <MenuOpenIcon />
      </InteractionsHeader>
      <DrawerInteractionList />
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  overflow: auto;
  border-right: 1px solid black;
`;

const InteractionsHeader = styled.h3`
  justify-content: center;
  display: flex;
  gap: 5%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
