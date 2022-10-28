// import React,{useState} from "react";
// import styles from "./style";
// import iconCheck from "./images/icon-check.svg"
// import iconCross from "./images/icon-cross.svg"

// const ComplatedList = (todoItems,setTodoItems) => {
//     const list = [...todoItems];
//     let complatedList = todoItems.filter((item) => {
//         if(item.done === true){
//           return item;
//         }
//       })

//       const doneUndone =(index)=>{
//         list[index].done = !list[index].done
//         console.log(list)
      
//        setTodoItems(list);
//       }
    
//       const remove = (id) => {
//         list.splice(id,1);
//         setTodoItems(list);
//       }

//     return (
        
//         complatedList.map((todo,index) => 
//     <li  style={styles.inputDiv} key={index} id={index}>
//       <div onClick={() =>doneUndone(index)} className="checkbox-text">
//         <div style={!todo.done ? styles.checkBox : styles.checkBoxChecked}>
//           <img src={iconCheck}/>
//         </div>
//         <span style={!todo.done ? styles.liContent : styles.liContentChecked}>{todo.content}</span>
//       </div>
//       <img onClick={() => remove(index)} className="CrossImg" src={iconCross}/>
//     </li>  
//     )
//     )
// }

// export default ComplatedList;