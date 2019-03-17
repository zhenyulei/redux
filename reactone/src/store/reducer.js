import {CHANGE_INPUT_VALUE,ADD_INPUT_VALUE,DELETE_LIST_ITEM,INIT_LIST_DATA} from './actionType.js'

const defaultState ={
    inputValue:'默认信息',
    list:[]
};
export default (state = defaultState ,action)=>{
  if(action.type === CHANGE_INPUT_VALUE){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }else if(action.type === ADD_INPUT_VALUE){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }else if(action.type === DELETE_LIST_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }else if(action.type === INIT_LIST_DATA){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.listData;
    return newState;
  }else{
    return state;
  }

}