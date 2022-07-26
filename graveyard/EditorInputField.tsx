export {};
// import React, { useState } from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import * as S from "../../styles/components/EditorTextInputStyles";
// import { activePerson } from "../../atoms/persons";
// import DeleteIcon from "@mui/icons-material/Delete";
// import {
//   addMessage,
//   deleteMessage,
//   MessageProps,
//   PageProps,
//   updateMessage,
// } from "../../atoms/stories";
// import { activePage as ap } from "../../selectors/stories";

// export const EditorInputField: React.FC = () => {
//   const [selectedPerson] = useRecoilState(activePerson);
//   const activePage = useRecoilValue(ap);
//   const [inputText, setInputText] = useState("");
//   const [messageInputText, setMessageInputText] = useState("");
//   const [selectedInputArea, setSelectedInputArea] = useState<number | null>(
//     null
//   );

//   const handleUpdateMessage = (e: React.FormEvent, message: MessageProps) => {
//     e.preventDefault();
//     if (messageInputText !== "") {
//       updateMessage(message);
//     }
//   };

//   const handleAddMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     const currentPage: PageProps = activePage!;
//     const newMessage: MessageProps = {
//       id:
//         currentPage.messages.length !== 0
//           ? currentPage.messages[currentPage.messages.length - 1].id + 1
//           : 0,
//       person: selectedPerson,
//       content: inputText,
//       align: selectedPerson === undefined ? "center" : "right",
//       interactionType: "NONE",
//     };
//     addMessage(newMessage);
//     setInputText("");
//   };

//   const handleDeleteMessage = (selectedmessage: MessageProps) => {
//     deleteMessage(selectedmessage);
//   };

//   const handleOnFocus = (message: MessageProps) => {
//     setSelectedInputArea(message.id);
//     setMessageInputText(message.content);
//   };

//   const handleOnBlur = () => {
//     setSelectedInputArea(null);
//     setMessageInputText("");
//   };

//   const messageList = activePage?.messages.map((message: MessageProps) => {
//     return (
//       <div key={message.id}>
//         <form
//           key={message.id}
//           onSubmit={(e) => handleUpdateMessage(e, message)}
//         >
//           <S.ColorCircle
//             style={{
//               backgroundColor: message.person?.color?.toString(),
//               opacity: message.person ? "1" : "0",
//             }}
//           />
//           <S.FormInput
//             type="text"
//             onFocus={() => handleOnFocus(message)}
//             onBlur={handleOnBlur}
//             value={
//               selectedInputArea === message.id
//                 ? messageInputText
//                 : message.content
//             }
//             onChange={(e) => setMessageInputText(e.target.value)}
//           />
//           <DeleteIcon
//             sx={{ fontSize: 12 }}
//             onClick={() => handleDeleteMessage(message)}
//           />
//         </form>
//       </div>
//     );
//   });

//   return (
//     <>
//       {messageList}
//       <div>
//         <form onSubmit={(e) => handleAddMessage(e)}>
//           <S.ColorCircle
//             style={{
//               backgroundColor: selectedPerson?.color?.toString(),
//               opacity: selectedPerson ? "1" : "0",
//               top: "28px",
//             }}
//           />
//           <S.FormInput
//             id="lastInput"
//             type="text"
//             placeholder="Write a sentence..."
//             value={inputText}
//             onChange={(event) => setInputText(event.target.value)}
//             style={{ marginTop: "15px", borderBottom: "1px solid lightgray" }}
//           />
//         </form>
//       </div>
//     </>
//   );
// };
