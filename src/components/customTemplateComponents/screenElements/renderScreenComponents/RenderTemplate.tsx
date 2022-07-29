import { Grid } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCommunicationCategoryIndex,
  CommunicationCategory,
} from "../../../../atoms/template";
import {
  communicationCategoriesList,
  getActiveTemplate,
} from "../../../../selectors/template";
import { InteractionSwitch } from "../../../editorComponents/InteractionSwitch";

export const RenderTemplate: React.FC = () => {
  const components = useRecoilValue(communicationCategoriesList);
  const currentTemplate = useRecoilValue(getActiveTemplate);
  const [, setCCIndex] = useRecoilState(activeCommunicationCategoryIndex);

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

  const handleSetCCIndex = (communication: CommunicationCategory) => {
    setCCIndex(
      components.findIndex(
        (CC: CommunicationCategory) =>
          CC.interactionName === communication.interactionName
      )
    );
  };

  return (
    <Grid container>
      {components.map((communication: CommunicationCategory) => (
        <Grid
          key={communication.interactionName}
          item
          xs={3.4}
          sx={{
            margin: 2.3,
            textAlign: "center",
            borderRadius: "1rem",
            "&:hover": {
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              backgroundColor: "#c4cfd3",
            },
          }}
          onClick={() => handleSetCCIndex(communication)}
        >
          <p>{communication.interactionName}</p>
          <InteractionSwitch
            id={0}
            content="Lorem Ipsum has been the industry's standard dummy text "
            format={[
              communication.interactionName,
              getFormatName(communication.interactionName),
            ]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
