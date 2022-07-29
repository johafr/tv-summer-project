import { Grid } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeCommunicationCategoryIndex,
  ComponentFormat,
} from "../../../../atoms/template";
import { cachedCustomTemplateState } from "../../../../screens/CreateCustomTemplate";
import { activeCommunicationCategory } from "../../../../selectors/template";
import { InteractionSwitch } from "../../../editorComponents/InteractionSwitch";

export const EditRenderCommunication = () => {
  const { currentCommunicationCategory, currentCommunicationFormats } =
    useRecoilValue(activeCommunicationCategory);
  const currentIndex = useRecoilValue(activeCommunicationCategoryIndex);
  const [cachedTemplate, setCachedTemplate] = useRecoilState(
    cachedCustomTemplateState
  );

  const handleSetNewFormat = (newFormatIndex: number) => {
    setCachedTemplate({
      ...cachedTemplate,
      indexes: [
        ...cachedTemplate.indexes.slice(0, currentIndex),
        {
          communicationName:
            cachedTemplate.indexes[currentIndex].communicationName,
          index: newFormatIndex,
        },
        ...cachedTemplate.indexes.slice(currentIndex + 1),
      ],
    });
  };

  return (
    <Grid container>
      {currentCommunicationFormats.map(
        (format: ComponentFormat, formatIndex: number) => (
          <>
            {formatIndex === cachedTemplate.indexes[currentIndex].index ? (
              <Grid
                item
                key={format.formatName}
                xs={3.4}
                sx={{
                  margin: 2.3,
                  textAlign: "center",
                  borderRadius: "1rem",
                  "&:hover": {
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  },
                  backgroundColor: "#a4afb3",
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
            ) : (
              <Grid
                item
                key={format.formatName}
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
                onClick={() => handleSetNewFormat(formatIndex)}
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
            )}
          </>
        )
      )}
    </Grid>
  );
};
