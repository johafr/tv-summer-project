import React, { useState } from "react";
import * as S from "../../styles/components/EditorStyles";
import { addMessage, Message } from "../../atoms/stories";
import { allCharactersState, Person } from "../../atoms/Characters";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePage } from "../../selectors/stories";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
} from "../../selectors/template";
import { CommunicationCategory } from "../../atoms/template";
import { ComIconSwitch } from "./ComIconSwitch";
import { PersonSelectModal } from "./PersonSelectModal";
import { activePerson } from "../../selectors/Characters";
import { updateVisibility, visibileBoxesState } from "../../atoms/editor";

// Component props
type Props = {
  category: CommunicationCategory;
  boxheight: string;
};

// Component wrapper function
export const ComInputBox: React.FC<Props> = ({ category, boxheight }) => {
    
    // Recoil States
    const currentPage = useRecoilValue(activePage);
    const { currentCommunicationCategory } = useRecoilValue(activeCommunicationCategory);
    const catergoriesList = useRecoilValue(communicationCategoriesList)
    const selectedPerson = useRecoilValue(activePerson);
    const [personList] = useRecoilState(allCharactersState);
    const [visibleBoxes,setVisibleBoxes] = useRecoilState(visibileBoxesState)
    
    // Component Local States
    const [textField,setTextField] = useState("");
    const [viewPersonModal, setViewPersonModal] = useState<boolean>(false);
    const [expandedSide, setExpandedSide] = useState<string>("LEFT")

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

    // Handler for the namelist modal
    const handleViewModal = (side: number) => {
        if (viewPersonModal) {
            setViewPersonModal(false)
        }
        else {setViewPersonModal(true);}
    };

    // Handler for toggling between left/right alignment
    const handleAlignmentSwitch = (person : Person, newAlignment : string) => {
        setExpandedSide(newAlignment);
    }

    const handleToggleVisibility = (interactionName : string) => {
        const selectedBoxIndex = visibleBoxes.findIndex((box) => box.interactionName === interactionName)
        const selectedBox = visibleBoxes[selectedBoxIndex];
        const updatedVisibility = [
            ...visibleBoxes.slice(0, selectedBoxIndex),
            {...selectedBox, visible : !selectedBox.visible},
            ...visibleBoxes.slice(selectedBoxIndex + 1)
        ]
        setVisibleBoxes(updatedVisibility);
    }

    // Handler for displaying different types of headers in the inputbox
    const headerHandler = () => {
        switch(category.interactionName) {
            case "NARRATIVE":
                return (
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
                )
            case "DIALOG":
            case"THOUGHT":
            case "TEXTMESSAGE":
            case "SHOUT":
                switch(expandedSide) {
                    case "RIGHT":
                        return  (
                            <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
                                <S.ConvoName onClick={() => handleAlignmentSwitch(selectedPerson!,"LEFT")} style={{ width: "20%", backgroundColor: "lightgray",textAlign:'center' }}>
                                </S.ConvoName>
                                <S.ConvoName
                                    onClick={() => handleViewModal(0)}
                                    style={{
                                        width: "80%",
                                        backgroundColor: selectedPerson?.color,
                                        textAlign:'center'
                                    }}
                                >
                                    <p style={{color: selectedPerson ? 'black' : 'gray',fontStyle: selectedPerson ? 'normal' : 'italic'}}>
                                        {selectedPerson ? selectedPerson.name : "Choose a person.."}
                                    </p>
                                    <PersonSelectModal viewModal={viewPersonModal} side={0} />
                                </S.ConvoName>
                            </div>
                        )
                    default:
                        return (
                            <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
                                <S.ConvoName
                                    onClick={() => handleViewModal(0)}
                                    style={{
                                        width: "80%",
                                        backgroundColor: selectedPerson?.color,
                                        textAlign:'center'
                                    }}
                                >
                                    <p style={{color: selectedPerson ? 'black' : 'gray',fontStyle: selectedPerson ? 'normal' : 'italic'}}>
                                        {selectedPerson ? selectedPerson.name : "Choose a person.."}
                                    </p>
                                    <PersonSelectModal viewModal={viewPersonModal} side={0} />
                                </S.ConvoName>
                                <S.ConvoName onClick={() => handleAlignmentSwitch(selectedPerson!,"RIGHT")} style={{ width: "20%", backgroundColor: "lightgray",textAlign:'center' }}></S.ConvoName>
                            </div>
                        )
                    }

            default:
                return <S.ConvoName style={{border: 'none', textAlign: 'center'}}>Something went wrong...</S.ConvoName>
    }}

    // Component end-return
    return (
        <S.Expandable height={boxheight}>
        <S.IconContainer style={{ }} onClick={() => handleToggleVisibility(category.interactionName)}>
            <div>
                <ComIconSwitch category={category}/>
                <p>{category.interactionName}</p>
            </div>
        </S.IconContainer>

        { visibleBoxes[visibleBoxes.findIndex(v => v.interactionName === category.interactionName)].visible === true ?
        <S.InputContainer style={{}}>
            {headerHandler()}
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
