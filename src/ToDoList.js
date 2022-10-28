import React, { useState } from "react";
import iconCheck from "./images/icon-check.svg"
import iconCross from "./images/icon-cross.svg"
import styles from "./style";


const TodoList = ({todoItems,setTodoItems,filterValue,lightMode}) =>{
  const list = [...todoItems];
  
  const doneUndone =(id)=>{
    list.map((item,index) => {
      if(item.content == id){
        list[index].done = !list[index].done
      }
    })
  
   setTodoItems(list);
  }

  const remove = (id) => {
    list.map((item,index) => {
      if(item.content == id){
        list.splice(index,1);
      }
    })
    setTodoItems(list);
  }
  
  let liList = [];
  const filter = () =>{
    if(filterValue == 'complated'){
      liList = todoItems.filter((item) => {
        if(item.done === true){
          return item;
        }
      })
      return liList
    }else if(filterValue == 'active'){
      liList = todoItems.filter((item) => {
        if(item.done === false){
          return item;
        }
      })
      return liList;
    }else{
      return liList = todoItems;
    }
  }

  return (
    
    filter().map((todo) => 
    <li  onClick={() =>doneUndone(todo.content)} style={lightMode ? styles.inputDiv:{...styles.inputDiv, ...styles.darkMode.darkUl,borderBottom:'0.5px solid #393A4B'}} key={todo.content} id={todo.content}>
      <div  className="checkbox-text">
        <div style={!todo.done ? styles.checkBox  : styles.checkBoxChecked}>
          <img src={todo.done ? iconCheck:null}/>
        </div>
        <span style={{...!todo.done ? {...styles.liContent,color: lightMode ? '#494C6B':"#C8CBE7"} : {...styles.liContentChecked,color: lightMode ? '#D1D2DA':"#4D5067"}}}>{todo.content}</span>
      </div>
      <img onClick={() => remove(todo.content)} className="CrossImg" src={iconCross}/>
    </li>  
    )
   )
}

export default TodoList;