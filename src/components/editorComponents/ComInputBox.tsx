import React, { useState } from "react";
import * as S from "../../styles/components/EditorStyles";
import ArticleIcon from "@mui/icons-material/Article";
import { addMessage, Message } from "../../atoms/stories";
import { Person } from "../../atoms/Characters";
import { useRecoilValue } from "recoil";
import { activePage } from "../../selectors/stories";
import { activeCommunicationCategory, getAllCommunicationCategories } from "../../selectors/template";
import { CommunicationCategory } from "../../atoms/template";
import { ComIconSwitch } from "./ComIconSwitch";

// Component props
type Props = {
    category : CommunicationCategory
};

// Component wrapper function
export const ComInputBox: React.FC<Props> = ({ category }) => {

    // Recoil States
    const currentPage = useRecoilValue(activePage);
    const { currentCommunicationCategory } = useRecoilValue(activeCommunicationCategory);
    const catergoriesList = useRecoilValue(getAllCommunicationCategories)

    // Component Local States
    const [textField,setTextField] = useState("");

    const handleAddMessage = (
        e: React.FormEvent,
        category : CommunicationCategory,
        selectedperson?: Person | undefined
      ) => {
        e.preventDefault();
    
        const correctInput: string = textField;
        const newMessage: Message = {
          id: currentPage.messages[currentPage.messages.length - 1].id + 1,
          person: selectedperson,
          content: correctInput,
          format: [
            currentCommunicationCategory!.interactionName,
    
            currentCommunicationCategory!.premadeFormats[
              currentCommunicationCategory!.activeFormatIndex
            ].toString(),
          ],
        };
        addMessage(newMessage);
    
        // Set inputfield to empty
        setTextField("");
      };

    const iconHandler = () => {
        switch(category) {
            default: return null;
        } 
    }

    // Component end-return
    return (
        <S.Expandable style={{}}>
        <S.IconContainer style={{ }}>
          <div>
            <ComIconSwitch category={category}/>
            <p>{category.interactionName}</p>
        </div>
        </S.IconContainer>

        <S.InputContainer style={{}}>
          <S.ConvoName style={{border: 'none', textAlign: 'center'}}>{category.interactionName}</S.ConvoName>
          <form onSubmit={(event) => handleAddMessage(event, category)}>
            <S.TextInput
              value={textField}
              placeholder="Write something.."
              onChange={(event) => setTextField(event.target.value)}
            />
          </form>
        </S.InputContainer>

      </S.Expandable>
    )
}