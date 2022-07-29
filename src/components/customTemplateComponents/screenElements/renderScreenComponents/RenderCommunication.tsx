import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { ComponentFormat } from "../../../../atoms/template";
import { activeCommunicationCategory } from "../../../../selectors/template";
import { InteractionSwitch } from "../../../editorComponents/InteractionSwitch";

export const RenderCommunication: React.FC = () => {
  const { currentCommunicationCategory, currentCommunicationFormats } =
    useRecoilValue(activeCommunicationCategory);

  return (
    <Grid container>
      {currentCommunicationFormats.map((format: ComponentFormat) => (
        <Grid
          key={format.formatName}
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
        >
          <p>{format.formatName}</p>
          <InteractionSwitch
            id={0}
            content="Lorem Ipsum has been the industry's standard dummy text "
            format={[
              currentCommunicationCategory!.interactionName,
              format.formatName,
            ]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
