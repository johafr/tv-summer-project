import { atom } from "recoil";
import { CommunicationCategory } from "./template";





export type BoxVisibility = {
    interactionName : string;
    visible : boolean;
}

const initVisible : BoxVisibility[] = [
    {interactionName: "NARRATIVE", visible: true},
    {interactionName: "TEXTMESSAGE",visible: false},
    {interactionName: "DIALOG",visible: true},
    {interactionName: "THOUGHT",visible: false},
    {interactionName: "SHOUT",visible: false},
]


export const visibileBoxesState = atom<BoxVisibility[]>({
    key: "visibileBoxesState",
    default: initVisible
})

export const selectedPersonSide = atom<string>({
    key: "selectedPersonSide",
    default: "LEFT"
})

export const updateVisibility = (visibileBoxes : BoxVisibility[])  => {
    return visibileBoxes
}

