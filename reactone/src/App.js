import React, { Component } from 'react';
import './App.css';
import store from './store'
import { changeInputValue ,addInputValue ,deleteListItem ,getListData} from './store/actionCreator.js'
import AppUI from './AppUI'

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(()=>{this.handleStoreChange()})
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  componentDidMount(){
     store.dispatch(getListData())
  }

  render() {
    const {inputValue,list} = this.state
    return (
      <AppUI
      inputValue = {inputValue}
      handleInputChange = {this.handleInputChange}
      submitData = {this.submitData}
      list = {list}
      deleteList = {this.deleteList}
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
    console.log(index);
    store.dispatch(deleteListItem(index));
  }
}

export default App;
