import { atom } from "recoil";



export type VisibilityBoxes = {
    narrative : boolean;
    dialog : boolean;
    textmessage : boolean
    thought : boolean
    shout : boolean
  }



const initVisible = {
    narrative : true,
    dialog : true,
    textmessage : true,
    thought : true,
    shout : true
  }

export const visibileBoxesState = atom<VisibilityBoxes>({
    key: "visibileBoxesState",
    default: initVisible
})