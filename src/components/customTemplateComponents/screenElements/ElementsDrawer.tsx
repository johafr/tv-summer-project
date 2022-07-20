import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { DrawerComponents } from "../DrawerComponents";

const drawerWidth = 20;

export const ElementsDrawer = () => {
  return (
    <Drawer>
      <ComponentsHeader>
        Components <MenuOpenIcon />
      </ComponentsHeader>
      <DrawerComponents />
    </Drawer>
  );
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  background-color: #d3d3d3;
  overflow: auto;
  border-right: 1px solid black;
`;

const ComponentsHeader = styled.h3`
  justify-content: center;
  display: flex;
  gap: 5%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid black;
  background-color: antiquewhite;
  margin: 0;
`;
