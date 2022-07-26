import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ComponentFormat } from "../../../atoms/template";
import { activeCommunicationCategory } from "../../../selectors/template";
import { InteractionSwitch } from "../../editorComponents/InteractionSwitch";

const ToolbarHeight: number = 45.5;

export const RenderScreen = () => {
  const { currentCommunicationCategory, currentCommunicationFormats } =
    useRecoilValue(activeCommunicationCategory);

  return (
    <Screen interactionIsActive={currentCommunicationCategory !== null}>
      <Toolbar interactionIsActive={currentCommunicationCategory !== null}>
        <ButtonSpan>Preview</ButtonSpan>
        <ButtonSpan>Save</ButtonSpan>
      </Toolbar>
      <ComponentDisplay>
        {currentCommunicationCategory && (
          <Grid container>
            {currentCommunicationFormats.map((format: ComponentFormat) => (
              <Grid
                item
                xs={3.4}
                sx={{
                  height: 100,
                  margin: 2.3,
                  justifyContent: "center",
                  display: "flex",
                  "&:hover": {
                    backgroundColor: "#a4afb3",
                  },
                }}
              >
                <InteractionSwitch
                  id={0}
                  content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  format={[
                    currentCommunicationCategory.interactionName,
                    format.formatName,
                  ]}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </ComponentDisplay>
    </Screen>
  );
};

const Screen = styled.div<{ interactionIsActive: boolean }>`
  width: ${(props) => (props.interactionIsActive ? 60 : 80)}%;
`;

const ComponentDisplay = styled.div`
  background-color: #d4dfe3;
  height: calc(100% - ${ToolbarHeight}px);
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Toolbar = styled.div<{ interactionIsActive: boolean }>`
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: var(--middle-shadow-elevation-low);
`;

const ButtonSpan = styled.span`
  margin-left: 1rem;
`;
