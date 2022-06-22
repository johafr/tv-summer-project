import { atom } from "recoil";

// Init data
const initialData = '';

// State
export const inputTextState = atom<string>({
    key: 'inputTextState',
    default: initialData,
})

// Modifer (ie adding items to a list state)
export const modifer = () => {
    return ''
}