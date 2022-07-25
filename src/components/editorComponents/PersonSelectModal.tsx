import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  fourBoxSelectedPersonsState,
  Person,
  charactersState,
} from "../../atoms/persons";

// Component props
type Props = {
  viewModal: boolean[];
  side: number;
};

// Component wrapper function
export const PersonSelectModal: React.FC<Props> = ({ viewModal, side }) => {
  const [selectPersons, setSelectedPersons] = useRecoilState(
    fourBoxSelectedPersonsState
  );
  const [personList] = useRecoilState(charactersState);

  const handleModalSelection = (person: Person, side: number) => {
    const values = [...selectPersons];
    values[side] = [person];
    setSelectedPersons(values);
  };

  const personsList = personList.map((person, index) => {
    return (
      <p
        key={index}
        style={{ textAlign: "left", marginLeft: "5px", padding: "0.2rem" }}
        onClick={() => handleModalSelection(person, side)}
      >
        {person.name}
      </p>
    );
  });

  // End return
  return (
    <div>
      {viewModal[side] ? (
        <PersonModalWrapper>{personsList}</PersonModalWrapper>
      ) : null}
    </div>
  );
};

export const PersonModalWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: lightgray;
  position: relative;
  top: 30px;
  left: 10px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: 0.8;
  z-index: 1;

  & p:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
