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

// Component props
type Props = {

};

// Component wrapper function
export const EditorFourBox: React.FC<Props> = ({  }) => {
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

    


    const handleAddMessage = (index : number, e : React.FormEvent, type : string) => {
        e.preventDefault();

        let messageType = "NONE";

        if(type === "NARRATIVE") {messageType = "NARRATIVE"}
        const correctInput : string = textInputs[0][0].inputField;
        const newMessage : MessageProps = {
            id: currentPage.messages[currentPage.messages.length - 1].id + 1,
            content : correctInput,
            align :"center",
            interactionType: messageType
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
                <div style={{marginTop:'15%'}}>
                  <ArticleIcon/><p>Narrative</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'15%'}}>
                  <ForumIcon/><p>Conversation</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'15%'}}>
                  <MessageIcon/><p>Text Message</p>
                </div>
              </Expandable>
              <Expandable>
                <div style={{marginTop:'15%'}}>
                  <BubbleChartIcon/><p>Thought</p>
                </div>
              </Expandable>
            </Wrapper>
            <Wrapper>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'1px solid black',borderRadius:'10px'}}>
                  <h4 style={{color:'gray'}}>NARRATIVE</h4>
                  <form onSubmit={(event) => handleAddMessage(0,event, "NARRATIVE")}>
                    <input value={textInputs[0][0].inputField}placeholder="...." onChange={(event) => handleChangeTextInput(0, event)} style={{width:'18rem',height:'3rem',border:''}}/>
                  </form>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'1px solid black',borderRadius:'10px'}}>
                  <div style={{display:'inline-flex', width:'92%'}}>
                    <h5 style={{width:'50%',textAlign:'left',border:'1px solid lightgray',borderRadius:'30px',padding:'4px'}}>
                        <div style={{width:'10px',height:'10px',backgroundColor:'red',float:'left',position:'relative',top:'4px',marginRight:'5px',borderRadius:'100px'}}/>
                        Freddy
                    </h5>
                    <h5 style={{width:'50%',textAlign:'right',border:'1px solid lightgray',borderRadius:'30px',padding:'4px'}}>
                        Lisa
                        <div style={{width:'10px',height:'10px',backgroundColor:'blue',float:'right',position:'relative',top:'4px',marginLeft:'5px',borderRadius:'100px'}}/></h5>
                  </div>
                  <input placeholder="...." style={{width:'18rem',height:'3rem',border:''}}/>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'1px solid black',borderRadius:'10px'}}>
                  <h4 style={{color:'gray'}}>TEXT MESSAGE</h4>
                  <input placeholder="...." style={{width:'18rem',height:'3rem',border:''}}/>
                </div>
              </Expandable>
              <Expandable>
                <div style={{width:'20rem',height:'8rem',border:'1px solid black',borderRadius:'10px'}}>
                  <h4 style={{color:'gray'}}>THOUGHT</h4>
                  <input placeholder="...." style={{width:'18rem',height:'3rem',border:''}}/>
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