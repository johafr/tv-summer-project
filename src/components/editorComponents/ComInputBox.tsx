import React, { useState } from "react";
import * as S from "../../styles/components/EditorStyles";
import { addMessage, Message } from "../../atoms/stories";
import { Person } from "../../atoms/Characters";
import { useRecoilValue } from "recoil";
import { activePage } from "../../selectors/stories";
import {
  activeCommunicationCategory,
  communicationCategoriesList,
} from "../../selectors/template";
import { CommunicationCategory } from "../../atoms/template";
import { ComIconSwitch } from "./ComIconSwitch";
import { PersonSelectModal } from "./PersonSelectModal";
import { activePerson } from "../../selectors/Characters";

// Component props
type Props = {
  category: CommunicationCategory;
};

const testperson: Person = {
  id: -1,
  name: "Dummy",
  color: "red",
  align: "left",
};

// Component wrapper function
export const ComInputBox: React.FC<Props> = ({ category }) => {
  // Recoil States
  const currentPage = useRecoilValue(activePage);
  const { currentCommunicationCategory } = useRecoilValue(
    activeCommunicationCategory
  );
  const catergoriesList = useRecoilValue(communicationCategoriesList);
  const selectedPerson = useRecoilValue(activePerson);

  // Component Local States
  // const selectedPerson = useState<Person>(testperson)
  const [textField, setTextField] = useState("");
  const [viewPersonModal, setViewPersonModal] = useState<boolean>(false);
  const [expandedSide, setExpandedSide] = useState<String>("LEFT");

  const handleAddMessage = (
    e: React.FormEvent,
    category: CommunicationCategory,
    selectedperson?: Person | undefined
  ) => {
    e.preventDefault();

    const correctInput: string = textField;
    const newMessage: Message = {
      id: currentPage.messages[currentPage.messages.length - 1].id + 1,
      person:
        category.interactionName !== "NARRATIVE" ? selectedPerson : undefined,
      content: textField,
      format: [category.interactionName, category.premadeFormats[0].toString()],
    };
    addMessage(newMessage);

    // Set inputfield to empty
    setTextField("");
  };

  const handleViewModal = (side: number) => {
    if (viewPersonModal) {
      setViewPersonModal(false);
    } else {
      setViewPersonModal(true);
    }
  };

  const headerHandler = () => {
    switch (category.interactionName) {
      case "NARRATIVE":
        return (
          <div
            style={{ display: "flex", flexDirection: "row", width: "100.0%" }}
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
        );
      case "DIALOG":
      case "THOUGHT":
      case "TEXTMESSAGE":
      case "SHOUT":
        switch (expandedSide) {
          case "RIGHT":
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100.0%",
                }}
              >
                <S.ConvoName
                  onClick={() => setExpandedSide("LEFT")}
                  style={{
                    width: "20%",
                    backgroundColor: "lightgray",
                    textAlign: "center",
                  }}
                ></S.ConvoName>
                <S.ConvoName
                  onClick={() => handleViewModal(0)}
                  style={{
                    width: "80%",
                    backgroundColor: selectedPerson?.color,
                    textAlign: "left",
                  }}
                >
                  <p>{selectedPerson?.name}</p>
                  <PersonSelectModal viewModal={viewPersonModal} side={0} />
                </S.ConvoName>
              </div>
            );
          default:
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100.0%",
                }}
              >
                <S.ConvoName
                  onClick={() => handleViewModal(0)}
                  style={{
                    width: "80%",
                    backgroundColor: selectedPerson?.color,
                    textAlign: "left",
                  }}
                >
                  <p>{selectedPerson?.name}</p>
                  <PersonSelectModal viewModal={viewPersonModal} side={0} />
                </S.ConvoName>
                <S.ConvoName
                  onClick={() => setExpandedSide("RIGHT")}
                  style={{
                    width: "20%",
                    backgroundColor: "lightgray",
                    textAlign: "center",
                  }}
                ></S.ConvoName>
              </div>
            );
        }

      default:
        return (
          <S.ConvoName style={{ border: "none", textAlign: "center" }}>
            Something went wrong...
          </S.ConvoName>
        );
    }
  };

  // Component end-return
  return (
    <S.Expandable style={{}}>
      <S.IconContainer style={{}}>
        <div>
          <ComIconSwitch category={category} />
          <p>{category.interactionName}</p>
        </div>
      </S.IconContainer>

      <S.InputContainer style={{}}>
        {headerHandler()}

        <form
          onSubmit={(event) =>
            handleAddMessage(event, category, selectedPerson)
          }
        >
          <S.TextInput
            value={textField}
            placeholder="Write something.."
            onChange={(event) => setTextField(event.target.value)}
          />
        </form>
      </S.InputContainer>
    </S.Expandable>
  );
};
