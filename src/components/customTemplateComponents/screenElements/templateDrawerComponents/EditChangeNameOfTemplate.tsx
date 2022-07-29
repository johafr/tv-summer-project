import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cachedCustomTemplateState } from "../../../../screens/CreateCustomTemplate";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import TextField from "@mui/material/TextField";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const EditChangeNameOfTemplate = () => {
  const [customTemplate, setCustomTemplate] = useRecoilState(
    cachedCustomTemplateState
  );
  const [change, setChange] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [nameText, setNameText] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const toggleInputField = () => {
    setNameText(customTemplate.templateName);
    setChange(!change);
  };

  const handleSaveName = () => {
    setCustomTemplate({ ...customTemplate, templateName: nameText });
    setChange(false);
  };

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNameText(e.target.value);
  };

  return (
    <Body
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onDoubleClick={toggleInputField}
    >
      {change ? (
        <TemplateHeader>
          <TextField
            id="nameInput"
            variant="outlined"
            label={""}
            size="small"
            value={nameText}
            onChange={(e) => handleChangeName(e)}
            onSubmit={handleSaveName}
            onKeyDown={(e) => e.key === "Enter" && handleSaveName}
            sx={{
              maxWidth: "80%",
              justifyContent: "center",
              display: "flex",
              borderTop: "none",
              ":&hover": {},
            }}
          />
        </TemplateHeader>
      ) : (
        <TemplateHeader>{customTemplate.templateName}</TemplateHeader>
      )}
      {change ? (
        <SaveButtonDiv isHovering={true} onClick={handleSaveName}>
          <SaveOutlinedIcon />
        </SaveButtonDiv>
      ) : (
        <>
          {isHovering ? (
            <ButtonDiv onClick={toggleInputField} isHovering={isHovering}>
              <ModeEditOutlineOutlinedIcon />
            </ButtonDiv>
          ) : (
            <ButtonDiv isHovering={false} />
          )}
        </>
      )}
    </Body>
  );
};

const TemplateHeader = styled.h3`
  display: flex;
  justify-content: center;
  user-select: none;
  width: 80%;
`;

const Body = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  width: 100%;
`;

const ButtonDiv = styled.div<{ isHovering: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  :hover {
    background-color: ${(props) => props.isHovering && "#d3d3d3"};
  }
`;

const SaveButtonDiv = styled.div<{ isHovering: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  background-color: lightblue;
  margin-right: 1rem;
`;
