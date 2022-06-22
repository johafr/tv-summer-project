import { atom } from "recoil";

// Init data
const initialData = '';

// State
export const inputNameState = atom<string>({
    key: 'inputNameState',
    default: initialData,
})

// Modifer (ie adding items to a list state)
export const modifer = () => {
    return ''
}