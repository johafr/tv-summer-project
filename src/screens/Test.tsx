import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { LeftCardChat } from "../components/customTemplateComponents/formats/LeftCardChat";
import { SpanCardChat } from "../components/customTemplateComponents/formats/SpanCardChat";
import { SpeechBubbleChat } from "../components/customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";
import { ThoughtBubbleChat } from "../components/customTemplateComponents/formats/ThoughtBubbleChat";
import { SingleNamedTextInput } from "../components/Editor Components/SingleNamedTextInput";
import { getAllInteractions } from "../selectors/interactionComponents";

import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import MessageIcon from "@mui/icons-material/Message";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { activePageIndex, MessageProps } from "../atoms/stories";
import { MessageCard } from "../components/editorComponents/MessageCard";
import { activePage, activeStoryStats } from "../selectors/stories";
import { EditorFourBox } from "../components/EditorFourBox";

type LeftCardProps = {
  name: string;
  text: string;
};
export const Test: React.FC = () => {
  const allInteractions = useRecoilValue(getAllInteractions);
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;

  return (
    <>
      <EditorFourBox />
    </>
  );
};

// export const TestComponent: React.FC<LeftCardProps> = ({ name, text }) => {
//   return (
//     <>
//       <h1>Bing bong!</h1>
//     </>
//   );
// };

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width:17rem;
//   margin:1rem;
// `;

// export const Output = styled.div`
//   width: 390px;
//   min-height:844px;
//   background-color: rgba(201,228,212);
//   box-shadow:10px 10px 10px 10px rgba(0,0,0,0.1);
//   margin:auto;
// `;

// export const Expandable = styled.div`
//   padding-top:0.5rem;
//   margin-top:0.33rem;
//   margin-left:0.2rem;
//   margin-bottom:3rem;
//   text-align:center;
// `;

{
  /* <SpeechBubbleChat 
name={"Mamma"} content={"We can probably tell you more tomorrow, Mikkel"} 
variant={"left"} inputVariables={allInteractions[0].premadeFormats[0]} 
/>
<SpanCardChat 
text={"She says as Dad shoots his arms high in the air, waves them back and forth as he sings."}
/>
<SpeechBubbleChat 
name={"Pappa"} 
content={"It was the best concert in the world."} 
variant={"left"} inputVariables={allInteractions[0].premadeFormats[0]}
/>
<LeftCardChat 
name={"Terje"} 
text={"He says. He used to say that after all the concerts they were at, but I believed in him every time, that this concert was even better than the previous one."} 
variant={"left"}
/>
<SpeechBubbleChat 
name={"Pappa"} 
content={"It was magical. The atmosphere was palpable!"} 
inputVariables={allInteractions[0].premadeFormats[0]}
/>
<ThoughtBubbleChat 
name={"Sanna"} 
content={"I remember wondering what that meant. How it could be both to touch and feel a mood."} 
variant={"right"}
/> */
}

{
  /* <div style={{display:'flex',border:'1px solid red'}}>
        <div style={{flexDirection:'row'}}>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
        </div>
        <div style={{flexDirection:'row'}}>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
          <div style={{width:'160px',height:'80px',border:'1px solid black',margin:'20px'}}></div>
        </div>
        <div style={{width:'160px',height:'390px',border:'1px solid black',margin:'20px'}}></div>
      </div> */
}

{
  /* <div style={{paddingTop:'5vh'}}></div>
      
     



      <div style={{display:'flex',width:'100%', alignSelf:'stretch'}}>
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
              <input placeholder="...." style={{width:'18rem',height:'3rem',border:''}}/>
            </div>
          </Expandable>
          <Expandable>
            <div style={{width:'20rem',height:'8rem',border:'1px solid black',borderRadius:'10px'}}>
              <div style={{display:'inline-flex', width:'80%'}}>
                <h5 style={{width:'50%',textAlign:'left'}}>Freddy</h5>
                <h5 style={{width:'50%',textAlign:'right'}}>Lisa</h5>
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
        </div> */
}
