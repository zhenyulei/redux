import React from 'react'
const AppUI = (props) =>{
  return (
    <div className="App">
      <label htmlFor="box">
        输入信息
        <input id="box" 
          value = {props.inputValue} 
          onChange = {props.handleInputChange}
        />
        <button onClick={props.submitData}>提交</button>
        </label>
      <ul>
       {
         props.list.map((item,index) => {
            return (
              <li key={index} onClick={props.deleteList.bind(this,index) }>{item}</li>
            )
         })
       }
      </ul>
    </div>
  );
}
export default AppUI;