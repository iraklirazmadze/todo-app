import React from "react"
import ReactDOM from 'react-dom/client';
import bgImgMobileLite from "./images/bg-mobile-light.jpg"
import bgImgMobileDark from "./images/bg-mobile-dark.jpg"
import iconCheck from "./images/icon-check.svg"
import moon from "./images/icon-moon.svg"
import sun from "./images/icon-sun.svg"
import { useState } from "react"
import TodoList from "./ToDoList"
import styles from "./style";
import MediaQuery from 'react'



const MainPage = ()=>{
  let idi = -1;
   function id() {
    idi ++;
    return idi;
  }
  const todos = [{content:"Jog around the park 3x", done:false},{content:"10 minutes meditation", done:false},{content:"Read for 1 hour", done:false},{content:"Pick up groceries", done:false},{content:'Complete Todo App on Frontend Mentor', done:false}];
let lists = 'all';
  
  const [todoItems,setTodoItems]=useState(todos);
  const [filterValue, setFilterValue]=useState('all');
  const [lightMode,setLightMode]=useState(true);
  
  const addTodoItem = (event) =>{
    if(event.key == "Enter"){
    let inputText = document.querySelector(".addTodo").value;
    let newTodoItems = [...todoItems];
    if(inputText !== ""){
      newTodoItems.unshift({content:inputText, done:false, id:id()});
      todos.unshift({content:inputText, done:false});
      
    }
    setTodoItems(newTodoItems);
    document.querySelector(".addTodo").value ="";
  }
  }

  const clearComplated = () =>{
    setTodoItems(todoItems.filter((item) => {
      if(item.done === false){
        return item;
      }
    }))
  }

  const activeTodos = () => {
    setFilterValue('active');
  }

  const showAllTodos = () =>{
    setFilterValue('all')
  }

  const complatedTodos = () =>{
    setFilterValue('complated')
   
  }
  const mode = () => {
    setLightMode(!lightMode);
    if(!lightMode){
      document.body.style.backgroundColor = "#F2F2F2";
    }else{
      document.body.style.backgroundColor = "#171823";
    }
  }
  

  return (
    <>
      <img className='bg-img' src={lightMode ? bgImgMobileLite:bgImgMobileDark} alt=''/>
      <div className='header-icon'>
        <h1>TODO</h1>
        <img className='icon-moon' src={lightMode ? moon:sun} style={{cursor:"pointer"}}  onClick={mode}/>
      </div>
      <div className='input-div' style={lightMode ? null:styles.darkMode.darkUl}>
        <div id="checkBox" style={styles.checkBox} onClick={ addTodoItem} onMouseOver={() =>document.getElementById('checkBox').style.borderColor = 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)'}>
          
        </div>
        <input  className='addTodo' type='text' onKeyDown={addTodoItem} placeholder='Create a new todo' defaultValue={''} style={lightMode ? null:{...styles.darkMode.darkUl,color:"#C8CBE7"}}/>
      </div>
      <ul id="ul" >
        <TodoList todoItems={todoItems} setTodoItems={setTodoItems} filterValue={filterValue} lightMode={lightMode} />
      </ul>
        <div className='navigationDiv' style={lightMode ? null:styles.darkMode.darkUl}>
          <span>
            {
              todoItems.filter((item) => {
                if(item.done === false){
                  return item;
                }
              }).length
            } items left
          </span>
          <span style={{cursor:'pointer'}} onClick={clearComplated}>clear complated</span>
        </div>
        <div className="navigationDiv secondNavigationDiv" style={lightMode ? null:{...styles.darkMode.darkUl,boxShadow:"0px 35px 50px -15px rgba(0, 0, 0, 0.5)"}}>
          <span onClick={showAllTodos} style={ filterValue == "all" ? styles.marked:null}>All</span>
          <span onClick={activeTodos} style={ filterValue == "active" ? styles.marked:null}>Active</span>
          <span onClick={complatedTodos} style={ filterValue == "complated" ? styles.marked:null}>Complated</span>
        </div>
      
      
      </>)

}

export default MainPage;