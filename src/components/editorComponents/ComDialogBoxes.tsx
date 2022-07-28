import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Person } from "../../atoms/Characters";
import { selectedPersonSide, visibileBoxesState } from "../../atoms/editor";
import { addMessage, Message } from "../../atoms/stories";
import { CommunicationCategory } from "../../atoms/template";
import { activePerson } from "../../selectors/Characters";
import { activePage } from "../../selectors/stories";
import { communicationCategoriesList } from "../../selectors/template";
import * as S from "../../styles/components/EditorStyles";
import { ComIconSwitch } from "./ComIconSwitch";
import { PersonSelectModal } from "./PersonSelectModal";

// Component props
type Props = {

};

// Component wrapper function
export const DialogBoxes: React.FC<Props> = ({  }) => {
    const [visibleBoxes,setVisibleBoxes] = useRecoilState(visibileBoxesState)
    const [activeSide,setActiveSide] = useRecoilState(selectedPersonSide);
    const categoriesList = useRecoilValue(communicationCategoriesList)
    const selectedPerson = useRecoilValue(activePerson);
    const currentPage = useRecoilValue(activePage);
    const [activeBox,setActiveBox] = useState("");
    const [textField,setTextField] = useState("");
    const [viewPersonModal, setViewPersonModal] = useState<boolean>(false);
    const [expandedSide, setExpandedSide] = useState<string>("LEFT")
    


    const boxheight = "50"


    const mapIcons = categoriesList.map((category) => {
        if (category.interactionName !== "NARRATIVE" && category.interactionName !== "SHOUT")
        return (
            <S.IconElements onClick={() => handleToggleVisibility(category.interactionName)} style={{color: category.interactionName === activeBox ? 'blue':''}}>
                <ComIconSwitch category={category}/>
                <p>{category.interactionName}</p>
            </S.IconElements>
        )
    })

    // Handler for toggling between left/right alignment
    const handleAlignmentSwitch = (person : Person, newAlignment : string) => {
        setActiveSide(newAlignment);
    }

    // Handler for the namelist modal
    const handleViewModal = (side: number) => {
        if (viewPersonModal) {
            setViewPersonModal(false)
        }
        else {setViewPersonModal(true);}
    };

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

    const headerHandler = () => {
        switch(activeSide) {
            case "RIGHT":
                return  (
                    <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
                        <S.ConvoName 
                            onClick={() => handleAlignmentSwitch(selectedPerson!,"LEFT")} 
                            style={{ 
                                width: "50%",
                                backgroundColor: "lightgray",
                                textAlign:'center' 
                                }}
                        >
                        </S.ConvoName>
                        <S.ConvoName
                            onClick={() => handleViewModal(0)}
                            style={{
                                width: "50%",
                                backgroundColor: selectedPerson?.color,
                                textAlign:'center'
                            }}
                        >
                            <p style={{color: selectedPerson ? 'black' : 'gray',fontStyle: selectedPerson ? 'normal' : 'italic'}}>
                                {selectedPerson ? selectedPerson.name : "Choose a person.."}
                            </p>
                            <PersonSelectModal viewModal={viewPersonModal} side={expandedSide} />
                        </S.ConvoName>
                    </div>
                )
            default:
                return (
                    <div style={{ display: "flex", flexDirection: "row", width:'100.0%'}}>
                        <S.ConvoName
                            onClick={() => handleViewModal(0)}
                            style={{
                                width: "50%",
                                backgroundColor: selectedPerson?.color,
                                textAlign:'center'
                            }}
                        >
                            <p style={{
                                color: selectedPerson ? 'black' : 'gray',
                                fontStyle: selectedPerson ? 'normal' : 'italic'}}
                            >
                                {selectedPerson ? selectedPerson.name : "Choose a person.."}
                            </p>
                            <PersonSelectModal viewModal={viewPersonModal} side={expandedSide} />
                        </S.ConvoName>
                        <S.ConvoName 
                            onClick={() => handleAlignmentSwitch(selectedPerson!,"RIGHT")} 
                            style={{
                                width: "50%",
                                backgroundColor: "lightgray",
                                textAlign:'center' 
                            }}
                        >
                        </S.ConvoName>
                    </div>
                )
            }
        }

    const currentActiveBox = categoriesList.filter((box) => box.interactionName === activeBox).map((category) => {
        if (category.interactionName !== "NARRATIVE")
        return ( 
            <S.InputContainer>
            {headerHandler()}
            <form onSubmit={(event) => handleAddMessage(event, category,selectedPerson)}>
                <S.TextInput
                    value={textField}
                    placeholder="Write something.."
                    onChange={(event) => setTextField(event.target.value)}
                />
            </form>
            </S.InputContainer>
        )

    })

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
            <S.IconContainer style={{ }} >
                {mapIcons}
            </S.IconContainer>
            {currentActiveBox}
        </S.Expandable>
    )
}