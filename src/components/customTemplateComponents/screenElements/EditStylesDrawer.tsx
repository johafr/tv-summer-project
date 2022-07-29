import styled from "styled-components";
import { drawerWidth } from "./TemplateDrawer";

export const EditStylesDrawer = () => {
  return <Drawer></Drawer>;
};

const Drawer = styled.div`
  min-width: ${drawerWidth}%;
  box-shadow: var(--right-shadow-elevation-low);
`;
