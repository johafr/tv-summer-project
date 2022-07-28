import { atom } from "recoil";
import { CommunicationCategory } from "./template";





export type BoxVisibility = {
    interactionName : string;
    visible : boolean;
}

const initVisible : BoxVisibility[] = [
    {interactionName: "NARRATIVE", visible: true},
    {interactionName: "TEXTMESSAGE",visible: true},
    {interactionName: "DIALOG",visible: true},
    {interactionName: "THOUGHT",visible: true},
    {interactionName: "SHOUT",visible: true},
]


export const visibileBoxesState = atom<BoxVisibility[]>({
    key: "visibileBoxesState",
    default: initVisible
})

export const updateVisibility = (visibileBoxes : BoxVisibility[])  => {
    return visibileBoxes
}

