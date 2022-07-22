import React, { useState } from "react";
import styled from "styled-components";
import { activePageIndex, addMessage, MessageProps } from "../atoms/stories";
import { MessageCard } from "./editorComponents/MessageCard";


import ArticleIcon from '@mui/icons-material/Article';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { useRecoilValue, useRecoilState } from "recoil";
import { getAllInteractions } from "../selectors/interactionComponents";
import { activePage, activeStoryStats } from "../selectors/stories";
import { EditorNames } from "./editorComponents/EditorNames";
import { EditorNamesInput } from "./editorComponents/EditorNamesInput";
import { EditorNamesList } from "./splitEditorComponents/EditorNamesList";
import { Person, persons } from "../atoms/persons";

// Component props
type Props = {

};

// Component wrapper function
export const EditorFourBox: React.FC<Props> = ({  }) => {
    const [personList, setPersonList] = useRecoilState(persons);
    const allInteractions = useRecoilValue(getAllInteractions);
    const [pageNum, setPageNum] = useRecoilState(activePageIndex);
    //Recoil selectors
    const currentPage = useRecoilValue(activePage);
    const numberOfPages = useRecoilValue(activeStoryStats).numPages!;
    const [textInputs,setTextInputs] = useState([
        [{ inputField: ""}],
        [{ inputField: ""}],
        [{ inputField: ""}],
        [{ inputField: ""}],
    ]);

    


    const handleAddMessage = (index : number, e : React.FormEvent, type : string, selectedperson? : Person | undefined) => {
        e.preventDefault();

        let messageType = "NONE";

        const correctInput : string = textInputs[0][0].inputField;
        const newMessage : MessageProps = {
            id : currentPage.messages[currentPage.messages.length - 1].id + 1,
            person: selectedperson,
            content : correctInput,
            align : "center",
            interactionType: type,
        }
        addMessage(newMessage);
        console.log(newMessage);

        // Set inputfield to empty
        const values = [...textInputs];
        values[index][0] = {inputField : ""};
        setTextInputs(values);

    }

    const handleChangeTextInput = (index : number, e: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...textInputs];
        values[index][0] = { inputField : e.target.value };
        setTextInputs(values);
    }




    // Component end-return
    return (
        <>
        
        <EditorNamesList numSelections={1} width={50}/>
        <EditorNamesInput numSelections={1} />
        
        <MainContainer>
            <Wrapper>
              <Expandable>
                <div style={{marginTop:'6%',border:'1px solid lightgray',paddingTop:'1rem',borderRadius:'100px'}}>
                  <ArticleIcon/><p>Narrative</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'9%',border:'1px solid lightgray',paddingTop:'1rem',borderRadius:'100px'}}>
                  <ForumIcon/><p>Conversation</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'12%',border:'1px solid lightgray',paddingTop:'1rem',borderRadius:'100px'}}>
                  <MessageIcon/><p>Text Message</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'9%', border:'1px solid lightgray',paddingTop:'1rem',borderRadius:'100px'}}>
                  <BubbleChartIcon/><p>Thought</p>
                </div>
              </Expandable>
            </Wrapper>
            <Wrapper>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'2px solid lightgray',borderRadius:'0px'}}>
                  <h4 style={{color:'gray'}}>NARRATIVE</h4>
                  <form onSubmit={(event) => handleAddMessage(0,event, "NARRATIVE")}>
                    <TextInput  value={textInputs[0][0].inputField}placeholder="...." onChange={(event) => handleChangeTextInput(0, event)}/>
                  </form>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'1px solid lightgray',borderRadius:'0px'}}>
                  <div style={{display:'inline-flex', width:'100%',position:'relative',top:'-24px'}}>
                    <ConvoName style={{textAlign:'left'}}>
                        <div style={{width:'20px',height:'20px',backgroundColor:personList[0].color,float:'left',position:'relative',top:'7px',marginRight:'5px',borderRadius:'100px'}}/>
                        <div style={{position:'relative',left:'4px',top:'9px'}}>{personList[0].name}</div>
                    </ConvoName>
                    <ConvoName style={{textAlign:'right'}}>
                        <div style={{position:'relative',right:'30px',top:'9px'}}>{personList[1].name}</div> 
                        <div style={{width:'20px',height:'20px',backgroundColor:personList[1].color,float:'right',position:'relative',top:'-10px',marginLeft:'5px',borderRadius:'100px'}}/>
                    </ConvoName>
                  </div>
                  <TextInput placeholder="...." style={{position:'relative',top:'-24px'}}/>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'2px solid lightgray',borderRadius:'0px'}}>
                  <h4 style={{color:'gray'}}>TEXT MESSAGE</h4>
                  <input placeholder="Write something..." style={{width:'19.6rem',height:'4rem',border:'none'}}/>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'2px solid lightgray',borderRadius:'0px'}}>
                  <h4 style={{color:'gray'}}>THOUGHT</h4>
                  <TextInput placeholder="...."/>
                </div>
              </Expandable>
            </Wrapper>
          
    
            <Output>
              <h2 style={{textAlign:'center', color:'gray'}}>OUTPUT</h2>
              <div>
                {currentPage?.messages.map((card: MessageProps) => (
                    <MessageCard
                      key={card.id}
                      id={card.id}
                      person={card.person}
                      content={card.content}
                      align={card.align}
                      interactionType={card.interactionType}
                    />
                  ))}
              </div>
            </Output>
        </MainContainer>
    </>
    );
};


export const MainContainer = styled.div`
    padding-top:5vh;
    display:flex;
    width:100%;
    align-self:stretch;
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:25%;
  margin:1rem;
`;

export const TextInput = styled.input`
    width:19.6rem;
    height:4rem;
    border:none;
`;

export const ConvoName = styled.h5`
    width:50%;
    height:2rem;
    border-bottom: 1px solid lightgray;
    borderRadius:0px;
    padding:4px;
    &:hover {
        background-color: lightgray;
    }
`;

export const Output = styled.div`
  width: 390px;
  min-height:844px;
  background-color: rgba(201,228,212);
  box-shadow:10px 10px 10px 10px rgba(0,0,0,0.1);
  margin:auto;
`;

export const Expandable = styled.div`
  padding-top:0.5rem;
  margin-top:0.33rem;
  margin-left:0.2rem;
  margin-bottom:3rem;
  text-align:center;
`;