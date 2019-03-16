import {CHANGE_INPUT_VALUE,ADD_INPUT_VALUE,DELETE_LIST_ITEM} from './actionType.js'

export const changeInputValue = (value)=> (
    {
        type:CHANGE_INPUT_VALUE,
        value
    }
)

export const  addInputValue = ()=> (
    {
        type:ADD_INPUT_VALUE,
    }
)

export const  deleteListItem= (index)=> (
    {
        type:DELETE_LIST_ITEM,
        index
    }
)
    
