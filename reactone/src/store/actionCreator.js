import {CHANGE_INPUT_VALUE,ADD_INPUT_VALUE,DELETE_LIST_ITEM,INIT_LIST_DATA} from './actionType.js'
import axios from 'axios'

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

export const  initListData = (listData)=> (
    {
        type:INIT_LIST_DATA,
        listData
    }
)

export const  getListData = ()=> {
    return (dispatch)=>{
        axios.get('/userList.json').then((res)=>{
            dispatch(initListData(res.data))
        })
    }
}
