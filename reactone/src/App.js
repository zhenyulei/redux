import React, { Component } from 'react';
import './App.css';
import store from './store'

import { changeInputValue ,addInputValue ,deleteListItem} from './store/actionCreator.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(()=>{this.handleStoreChange()})
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="box">
          输入信息
          <input id="box" 
            value = {this.state.inputValue} 
            onChange = {(e)=>{
              this.handleInputChange(e)
            }}
          />
          <button onClick={()=>{this.submitData()}}>提交</button>
          </label>
        <ul>
         {
           this.state.list.map((item,index) => {
              return (
                <li key={index} onClick={()=>{this.deleteList(index)}}>{item}</li>
              )
           })
         }
        </ul>
      </div>
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
