import { CHANGE_INPUT,ADD_INPUT} from './actionsType'
export const getInputChangeAction =(value)=>({
    type:CHANGE_INPUT,
    value
})
export const getAddItemAction =()=>({
    type:ADD_INPUT,
  
})