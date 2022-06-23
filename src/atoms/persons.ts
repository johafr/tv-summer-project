import { InsertInvitationOutlined } from "@mui/icons-material";
import { atom } from "recoil";
import { Person } from "./sentences";



// Init data
const initialData = [
    {id : 1, name: 'Markus',color: 'rgb(132, 176, 214'},
    {id : 2, name : 'Lisa', color: 'rgb(10, 214, 214'},
  ]

// State
export const personsState = atom<Person[]>({
    key: 'personsState',
    default: [],
})

// Modifer (ie adding items to a list state)
export const addPerson = (persons : Person[], newPerson : Person) => {
    return (
        [ ...persons,newPerson,]
        )
}