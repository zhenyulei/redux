import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {changeInputValue,addInputValue,deleteListItem,getListData} from './store/actionCreator.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    this.props.getListDatas();
  }
  render() {
    const {inputValue,changeInputValue,addListItem,list,deleteList} = this.props;
    return (
      <div className="App">
        <label htmlFor="box">
          输入信息
          <input id="box" 
            value = {inputValue} 
            onChange ={changeInputValue}
          />
          <button onClick={addListItem}>提交</button>
          </label>
          <ul>
          {
            list.map((item,index) => {
                return (
                  <li key={index} onClick={deleteList.bind(this,index) }>{item}</li>
                )
            })
          }
          </ul>
      </div>
    );
  }

}
const mapStateToProps = (state)=> {
  return (
    {
      inputValue:state.inputValue,
      list:state.list
    }
  )
};
const mapDispatchToProps = (dispatch)=>{
  return {
    changeInputValue(e){
      dispatch(changeInputValue(e.target.value))
    },
    addListItem(){
      dispatch(addInputValue())
    },
    deleteList(index){
      dispatch(deleteListItem(index))
    },
    getListDatas(){
      dispatch(getListData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
