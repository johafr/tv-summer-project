// import React from "react";
// import { useRecoilValue } from "recoil";
// import styled from "styled-components";
// import { getAllStyles } from "../../selectors/interactionComponents";
// import { SpeechBubbleChat } from "../customTemplateComponents/formats/dialogFormats/SpeechBubbleChat";

// // Component props
// type Props = {
//   name: string; // Ta inn navn fra liste som prop
// };

// // Component wrapper function
// export const SingleNamedTextInput: React.FC<Props> = ({ name }) => {
//   const activeStyles = useRecoilValue(getAllStyles);

//   const handleSubmitName = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   const assignCorrectVariables = (type: string) => {
//     switch (type) {
//       case "DIALOG":
//         return activeStyles.currentDialogStyle;
//       default:
//         return activeStyles.currentThoughtStyle;
//     }
//   };

//   // Component end-return
//   return (
//     <Wrapper>
//       <NameInput>
//         <form onSubmit={(event) => handleSubmitName(event)}>
//           <input value={name} />
//         </form>
//       </NameInput>
//       <TextInput>
//         <form>
//           <input placeholder={"Write something..."} />
//         </form>
//       </TextInput>
//       <TextOutput>
//         <SpeechBubbleChat
//           name="Terje"
//           content="Hei"
//           inputVariables={assignCorrectVariables("DIALOG")}
//         />
//         <SpeechBubbleChat
//           name="Lars"
//           content="Hei"
//           variant="right"
//           inputVariables={assignCorrectVariables("DIALOG")}
//         />
//       </TextOutput>
//     </Wrapper>
//   );
// };

// export const Wrapper = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   width: 28%;
//   margin: 1px;
//   padding: 10px;
//   border: 3px solid lightgray;
//   background-color: rgba(250, 250, 250, 250);
// `;

// export const NameInput = styled.div`
//   flex: 1 auto;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   width: 90%;
//   align-self: center;

//   & input {
//     text-align: center;
//     position: relative;
//     background-color: lightcyan;
//     width: 100%;
//     height: 3rem;
//     border: 2px solid lightgray;
//     border-radius: 5px;
//     font-size: 2rem;
//   }
// `;

// export const TextInput = styled.div`
//   flex: 1 auto;
//   width: 90%;
//   align-self: center;
//   & input {
//     text-align: center;
//     background-color: lightgray;
//     width: 100%;
//     height: 4rem;
//     border: 2px lightgray;
//     border-radius: 5px;
//     font-size: 0.9rem;
//   }
// `;

// export const TextOutput = styled.div`
//   height: 30rem;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

export {};
