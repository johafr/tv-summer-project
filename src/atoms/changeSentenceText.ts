import { atom } from "recoil";

// Init data
const initialData = '';

// State
export const changeSentenceTextState = atom<string>({
    key: 'changeSentenceTextState',
    default: initialData,
})

// Modifer (ie adding items to a list state)
export const modifer = () => {
    return ''
}