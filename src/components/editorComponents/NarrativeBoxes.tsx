import React, { useState } from "react";
import * as S from "../../styles/components/EditorStyles";
import { addMessage } from "../../atoms/stories";
import { useRecoilState, useRecoilValue } from "recoil";
import { CommunicationCategory } from "../../atoms/template";
import { IconSwitch } from "./EditorIconSwitch";
import { visibileBoxesState } from "../../atoms/editor";
import { communicationCategoriesList } from "../../selectors/template";

// Component props
type Props = {};

// Component wrapper function
export const NarrativeBoxes: React.FC<Props> = ({}) => {
  // Recoil States
  const [visibleBoxes, setVisibleBoxes] = useRecoilState(visibileBoxesState);
  const categoriesList = useRecoilValue(communicationCategoriesList);

  // Component Local States
  const [textField, setTextField] = useState("");
  const [activeBox, setActiveBox] = useState("");

  const handleAddMessage = (
    e: React.FormEvent,
    category: CommunicationCategory
  ) => {
    e.preventDefault();
    // Push message to list
    addMessage(textField, category);
    // Set inputfield to empty
    setTextField("");
  };

  const handleToggleVisibility = (interactionName: string) => {
    const selectedBoxIndex = visibleBoxes.findIndex(
      (box) => box.interactionName === interactionName
    );
    const selectedBox = visibleBoxes[selectedBoxIndex];
    const updatedVisibility = [
      ...visibleBoxes.slice(0, selectedBoxIndex),
      { ...selectedBox, visible: !selectedBox.visible },
      ...visibleBoxes.slice(selectedBoxIndex + 1),
    ];
    setVisibleBoxes(updatedVisibility);
    if (activeBox === interactionName) {
      setActiveBox("");
    } else setActiveBox(interactionName);
  };

  const listNarrativeBoxes = categoriesList.map((category, index: number) => {
    if (category.interactionName === "NARRATIVE") {
      return (
        <S.Expandable
          key={index}
          height={activeBox !== category.interactionName ? "50" : "7"}
        >
          <S.IconContainer
            style={{}}
            onClick={() => handleToggleVisibility(category.interactionName)}
          >
            <S.IconElements
              style={{
                color: category.interactionName !== activeBox ? "blue" : "",
              }}
            >
              <IconSwitch category={category} />
              <p>{category.interactionName}</p>
            </S.IconElements>
          </S.IconContainer>

          {visibleBoxes[
            visibleBoxes.findIndex(
              (v) => v.interactionName === category.interactionName
            )
          ].visible === true ? (
            <S.InputContainer style={{}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100.0%",
                }}
              >
                <S.ConvoName
                  style={{
                    border: "none",
                    textAlign: "center",
                    backgroundColor: "lightgray",
                  }}
                >
                  <p>{category.interactionName}</p>
                </S.ConvoName>
              </div>
              <form onSubmit={(event) => handleAddMessage(event, category)}>
                <S.TextInput
                  value={textField}
                  placeholder="Write something.."
                  onChange={(event) => setTextField(event.target.value)}
                />
              </form>
            </S.InputContainer>
          ) : null}
        </S.Expandable>
      );
    }
  });

  // Component end-return
  return (
    <>{listNarrativeBoxes}</>

    //     <S.Expandable height={boxheight}>
    //     <S.IconContainer style={{ }} onClick={() => handleToggleVisibility(category.interactionName)}>
    //         <S.IconElements style={{color: category.interactionName !== activeBox ? 'blue':''}}>
    //             <IconSwitch category={category}/>
    //             <p>{category.interactionName}</p>
    //         </S.IconElements>
    //     </S.IconContainer>

    //     { visibleBoxes[visibleBoxes.findIndex(v => v.interactionName === category.interactionName)].visible === true ?
    //     <S.InputContainer style={{}}>
    //          <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
    //             <S.ConvoName
    //                 style={{
    //                     border: 'none',
    //                     textAlign: 'center',
    //                     backgroundColor: 'lightgray'
    //                     }}>
    //                 <p>
    //                     {category.interactionName}
    //                 </p>
    //             </S.ConvoName>
    //         </div>
    //         <form onSubmit={(event) => handleAddMessage(event, category)}>
    //             <S.TextInput
    //                 value={textField}
    //                 placeholder="Write something.."
    //                 onChange={(event) => setTextField(event.target.value)}
    //             />
    //         </form>
    //     </S.InputContainer>
    //     : null
    //     }
    //   </S.Expandable>
  );
};
