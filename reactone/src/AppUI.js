import React,{ Component } from 'react'

class AppUI extends Component{
    render() {
        const {inputValue,handleInputChange,submitData,list,deleteList} = this.props;
        return (
          <div className="App">
            <label htmlFor="box">
              输入信息
              <input id="box" 
                value = {inputValue} 
                onChange = {(e)=>{
                  handleInputChange(e)
                }}
              />
              <button onClick={()=>{submitData()}}>提交</button>
              </label>
            <ul>
             {
               list.map((item,index) => {
                  return (
                    <li key={index} onClick={(index)=>{deleteList(index)}}>{item}</li>
                  )
               })
             }
            </ul>
          </div>
        );
      }
}
export default AppUI;