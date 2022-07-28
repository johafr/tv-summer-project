import { selector } from "recoil";
import { visibileBoxesState } from "../atoms/editor";


export const visibleNumber = selector({
    key: "numberVisible",
    get: ({ get }) => {
        const visibilityList = get(visibileBoxesState)
        const filteredList = visibilityList.filter((box) => box.visible === true);
        const amountVisible = filteredList.length
        return amountVisible;

    }
})