import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  Person,
  allCharactersState,
  setSelectedPerson,
  updatePerson,
} from "../../atoms/Characters";
import { activePerson, alignedPersonsList } from "../../selectors/Characters";

// Component props
type Props = {
  viewModal: boolean;
  side: string;
};

// Component wrapper function
export const PersonSelectModal: React.FC<Props> = ({ viewModal, side }) => {
  const selectedPerson = useRecoilValue(activePerson);
  const alignedCharacters = useRecoilValue(alignedPersonsList)

  const handleModalSelection = (person: Person) => {
    if (person.align === "") {
      const newPerson : Person = {
        ...person,align: "left"
      }
      updatePerson(person,newPerson);
    }
    selectedPerson === person
      ? setSelectedPerson(undefined)
      : setSelectedPerson(person);
  };

  const personsList = alignedCharacters.map((person, index) => {
    return (
      <p
        key={index}
        style={{ textAlign: "left", marginLeft: "5px", padding: "0.2rem" }}
        onClick={() => handleModalSelection(person)}
      >
        {person.name}
      </p>
    );
  });

  // End return
  return (
    <div>
      {viewModal ? (
        <PersonModalWrapper>{personsList}</PersonModalWrapper>
      ) : null}
    </div>
  );
};

export const PersonModalWrapper = styled.div`
  width: 60%;
  padding: 0.5rem;
  background-color: lightgray;
  position: relative;
  top: 0px;
  left: 0px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: 0.8;
  z-index: 1;

  & p:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
