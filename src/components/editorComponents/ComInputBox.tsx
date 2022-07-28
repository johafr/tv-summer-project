import React, { useState } from "react";
import * as S from "../../styles/components/EditorStyles";
import { addMessage, Message } from "../../atoms/stories";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePage } from "../../selectors/stories";
import { CommunicationCategory } from "../../atoms/template";
import { ComIconSwitch } from "./ComIconSwitch";
import { activePerson } from "../../selectors/Characters";
import { visibileBoxesState } from "../../atoms/editor";
import { Person } from "../../atoms/Characters";

// Component props
type Props = {
  category: CommunicationCategory;
  boxheight: string;
};

// Component wrapper function
export const ComInputBox: React.FC<Props> = ({ category, boxheight }) => {
    
    // Recoil States
    const currentPage = useRecoilValue(activePage);
    const selectedPerson = useRecoilValue(activePerson);
    const [visibleBoxes,setVisibleBoxes] = useRecoilState(visibileBoxesState)
    
    // Component Local States
    const [textField,setTextField] = useState("");
    const [activeBox,setActiveBox] = useState("");

    const handleAddMessage = (
        e: React.FormEvent,
        category : CommunicationCategory,
        selectedperson?: Person | undefined
      ) => {
        e.preventDefault();
        const correctInput: string = textField;
        const newMessage: Message = {
          id: currentPage.messages[currentPage.messages.length - 1].id + 1,
          person: category.interactionName !== "NARRATIVE" ? selectedperson : undefined,
          content: textField,
          format:  [
            category.interactionName,
            category.premadeFormats[category.activeFormatIndex].formatName
          ]
        };
        // Push message to list
        addMessage(newMessage);
        // Set inputfield to empty
        setTextField("");
      };

    const handleToggleVisibility = (interactionName : string) => {
        const selectedBoxIndex = visibleBoxes.findIndex((box) => box.interactionName === interactionName)
        const selectedBox = visibleBoxes[selectedBoxIndex];
        const updatedVisibility = [
            ...visibleBoxes.slice(0, selectedBoxIndex),
            {...selectedBox, visible : !selectedBox.visible},
            ...visibleBoxes.slice(selectedBoxIndex + 1)
        ]
        setVisibleBoxes(updatedVisibility);
        if (activeBox === interactionName) {setActiveBox("")}
        else setActiveBox(interactionName)
    }

    // Component end-return
    return (
        <S.Expandable height={boxheight}>
        <S.IconContainer style={{ }} onClick={() => handleToggleVisibility(category.interactionName)}>
            <S.IconElements style={{color: category.interactionName === activeBox ? 'blue':''}}>
                <ComIconSwitch category={category}/>
                <p>{category.interactionName}</p>
            </S.IconElements>
        </S.IconContainer>

        { visibleBoxes[visibleBoxes.findIndex(v => v.interactionName === category.interactionName)].visible === true ?
        <S.InputContainer style={{}}>
             <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
                <S.ConvoName 
                    style={{
                        border: 'none',
                        textAlign: 'center',
                        backgroundColor: 'lightgray'
                        }}>
                    <p>
                        {category.interactionName}
                    </p>
                </S.ConvoName>
            </div>
            <form onSubmit={(event) => handleAddMessage(event, category,selectedPerson)}>
                <S.TextInput
                    value={textField}
                    placeholder="Write something.."
                    onChange={(event) => setTextField(event.target.value)}
                />
            </form>
        </S.InputContainer>
        : null
        }

      </S.Expandable>
    )
}
