import { Grid } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  activeCommunicationCategoryIndex,
  CommunicationCategory,
  ComponentFormat,
} from "../../../atoms/template";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
  getActiveTemplate,
} from "../../../selectors/template";
import { InteractionSwitch } from "../../editorComponents/InteractionSwitch";
import { Person } from "../../../atoms/Characters";

const ToolbarHeight: number = 45.5;

const DummyPerson: Person = {
  id: -5,
  name: "TESTY",
  color: "#000000",
  align: "left",
};

export const RenderScreen = () => {
  const { currentCommunicationCategory, currentCommunicationFormats } =
    useRecoilValue(activeCommunicationCategory);
  const [, setCCIndex] = useRecoilState(activeCommunicationCategoryIndex);
  const currentTemplate = useRecoilValue(getActiveTemplate);
  const components = useRecoilValue(communicationCategoriesList);

  //might be possible to shorten this
  const getFormatName = (communicationName: string) => {
    const communicationIndex = components.findIndex(
      (c: CommunicationCategory) => c.interactionName === communicationName
    );
    const formatName =
      components[communicationIndex].premadeFormats[
        currentTemplate.indexes[communicationIndex].index
      ].formatName;
    return formatName;
  };

  return (
    <Screen>
      <Toolbar interactionIsActive={currentCommunicationCategory !== null}>
        <ButtonSpan>Preview</ButtonSpan>
        <ButtonSpan>Save</ButtonSpan>
      </Toolbar>
      <ComponentDisplay>
        {currentCommunicationCategory ? (
          <Grid container>
            {currentCommunicationFormats.map((format: ComponentFormat) => (
              <Grid
                item
                xs={3.4}
                sx={{
                  margin: 2.3,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#a4afb3",
                  },
                }}
              >
                <p>{format.formatName}</p>
                <InteractionSwitch
                  person={DummyPerson}
                  id={0}
                  content="Lorem Ipsum has been the industry's standard dummy text "
                  format={[
                    currentCommunicationCategory.interactionName,
                    format.formatName,
                  ]}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container>
            {components.map((communication: CommunicationCategory) => (
              <Grid
                item
                xs={3.4}
                sx={{
                  margin: 2.3,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#a4afb3",
                  },
                }}
                onClick={() =>
                  setCCIndex(
                    components.findIndex(
                      (CC: CommunicationCategory) =>
                        CC.interactionName === communication.interactionName
                    )
                  )
                }
              >
                <p>{communication.interactionName}</p>
                <InteractionSwitch
                  id={0}
                  person={DummyPerson}
                  content="Lorem Ipsum has been the industry's standard dummy text "
                  format={[
                    communication.interactionName,
                    getFormatName(communication.interactionName),
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

const Screen = styled.div`
  width: 60%;
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
