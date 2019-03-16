import React, { Component } from 'react';
import './App.css';
import store from './store'
import { changeInputValue ,addInputValue ,deleteListItem} from './store/actionCreator.js'
import AppUI from './AppUI'


class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(()=>{this.handleStoreChange()})
  }

  render() {
    const {inputValue,list} = this.state
    return (
      <AppUI
      inputValue = {inputValue}
      handleInputChange = {(e)=>{this.handleInputChange(e)}}
      submitData = {()=>{this.submitData()}}
      list = {list}
      deleteList = {(index)=>{this.deleteList(index)}}
      />
    );
  }
  handleInputChange(e){
    store.dispatch(changeInputValue(e.target.value));//这里是把这句话发送给store
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  submitData(){
    store.dispatch(addInputValue());
  }
  deleteList(index){
    store.dispatch(deleteListItem(index));
  }
}

export default App;
