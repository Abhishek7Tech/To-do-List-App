import styles from './Form.module.css';
import React, { useRef, useState} from 'react';
import TaskList from './TaskList';
import NoTasks from './Notask';
const style = `${styles.fields} ${styles.req}`;

function TaskForm(){

    const noRef = useRef('');  

    const inputRef = useRef(''); 
  
    const [input , setInput] = useState('');
    const [task , setTask] = useState('');

    const submitHandler = (event) => {
      event.preventDefault();
       
  };
   
   
   const btnHandler = () => {
     
     let taskNo = noRef.current.value;
     setInput (taskNo);
     
     let taskDes = inputRef.current.value; 
     setTask(taskDes);
     
    
    }
    
    if(input.length > 0 && task.length > 0){

      localStorage.setItem(input,task);
    }






    return(
       <React.Fragment>
       <section className = {styles.section}>
           <h3>Enter A Task</h3>
       <div className = {styles.form}>
      <form  onSubmit = {submitHandler} >
        <div className = {style} >
          <label htmlFor='no'>Task - No:</label>
          <input min = '1' type = 'number' id ='no' ref = {noRef}></input>
          </div>

          <div className = {styles.fields} >
          <label htmlFor = 'task'> Task:</label>
          <input  type ='text' id = 'task' ref = {inputRef}></input>
          </div>

          <div className = {styles.btn}>
          <button  type = 'submit' onClick = {btnHandler}> Add </button>  
          </div>
      

      </form>
      </div>
         
      {/* {!input && !task && <NoTasks />} */}
     
      </section>
     {input && task && <TaskList/> }

     {/* {input && task && <TaskList task = {input} des = {task} /> } */}
    {!input  && <NoTasks />}

      </React.Fragment>
    );

};

export default TaskForm;