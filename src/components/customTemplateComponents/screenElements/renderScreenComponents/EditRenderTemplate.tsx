import { Grid } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeCommunicationCategoryIndex } from "../../../../atoms/template";
import { cachedCustomTemplateState } from "../../../../screens/CreateCustomTemplate";
import { templateCommunications } from "../../../../selectors/template";
import { InteractionSwitch } from "../../../editorComponents/InteractionSwitch";

export const EditRenderTemplate = () => {
  const [currentTemplate] = useRecoilState(cachedCustomTemplateState);
  const activeFormats = useRecoilValue(templateCommunications);
  const [, setCCIndex] = useRecoilState(activeCommunicationCategoryIndex);

  return (
    <Grid container>
      {currentTemplate.indexes.map((CCformat, currentCCIndex) => (
        <Grid
          key={CCformat.communicationName}
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
          onClick={() => setCCIndex(currentCCIndex)}
        >
          {CCformat.communicationName}
          <InteractionSwitch
            id={-1}
            content="Lorem Ipsum has been the industry's standard dummy text "
            format={[CCformat.communicationName, activeFormats[currentCCIndex]]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
