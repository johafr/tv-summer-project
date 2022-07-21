import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getAllInteractions } from "../../selectors/interactionComponents";
import { SpeechBubbleChat } from "../customTemplateComponents/formats/SpeechBubbleChat";

// Component props
type Props = {
  name: string;
};

// Component wrapper function
export const NamedTextInput: React.FC<Props> = ({ name }) => {
  const allInteractions = useRecoilValue(getAllInteractions);

  // Component end-return
  return (
    <Wrapper>
      <NameInput>
        <input placeholder={name} />
      </NameInput>
      <TextInput>
        <input placeholder="text" />
      </TextInput>
      <TextOutput>
        <SpeechBubbleChat
          name="Terje"
          content="Hei"
          inputVariables={allInteractions[0].premadeFormats[0]}
        />
        <SpeechBubbleChat
          name="Lars"
          content="Hei"
          variant="right"
          inputVariables={allInteractions[0].premadeFormats[0]}
        />
      </TextOutput>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 50%;
  margin: 1px;
  padding: 10px;
  border: 3px solid lightgray;
  background-color: rgba(250, 250, 250, 250);
`;

export const TextOutput = styled.div`
  height: 30rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const NameInput = styled.div`
  flex: 1 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  align-self: center;

  & input {
    text-align: center;
    position: relative;
    background-color: lightcyan;
    width: 100%;
    height: 3rem;
    border: 2px solid lightgray;
    border-radius: 5px;
    font-size: 2rem;
  }
`;

export const TextInput = styled.div`
  flex: 1 auto;
  width: 90%;
  align-self: center;
  & input {
    text-align: center;
    background-color: lightgray;
    width: 100%;
    height: 4rem;
    border: 2px lightgray;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

{
  /* <div className="editor__left-container">
    <div className="editor__left-name">
    <S.NameForm style={{ paddingLeft: "0rem" }}>
        <Tooltip title="Add name/remove name.">
        <form
            onSubmit={(event) => handleSubmitName(0, "LEFT", event)}
        >
            <S.Input
            style={{
                cursor:
                selectPersons[0][0].name !== ""
                    ? "pointer"
                    : "text",
                backgroundColor:
                personList.length > 0
                    ? selectPersons[0][0].color
                    : "white",
            }}
            name="personName"
            type="text"
            onClick={() => handleResetNamefield(0)}
            placeholder="Write a name..."
            value={
                selectPersons[0][0].name !== "" &&
                personList.length > 0
                ? selectPersons[0][0].name
                : inputNames[0][0].personName
            }
            onChange={(event) => handleChangeInput(0, event)}
            />
        </form>
        </Tooltip>
    </S.NameForm>
    </div>
    <form onSubmit={(e) => handleAddMessage(e, "LEFT")}>
    <SplitInput
        className="messagetextinput"
        value={inputLeft}
        onChange={(event) => setInputLeft(event.target.value)}
        placeholder="Write a sentence..."
    />
    </form>
</div> */
}
