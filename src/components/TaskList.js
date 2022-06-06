import React, { useState } from 'react';
import Delete from './Delete';
import styles from './TaskList.module.css';
import NoTasks from './Notask';


function TaskList(props) {



// localStorage.setItem(props.task , JSON.stringify(props.des));
// console.log(localStorage.getItem(props.task));
  
  const store = [];


  for(let i = 0; i < localStorage.length;i++){
    // console.log(localStorage.getItem(localStorage.key(i)));
       store.push({
         id: localStorage.key(i),
         des:localStorage.getItem(localStorage.key(i))
       });
  }


//  const [background , setBackground] = useState(styles.section);

// const completed = [];

const [complete , setIsComplete] = useState([]);

const onCompleteHandler = (event) => {

  setIsComplete([...complete , event.currentTarget.id])
  
//   let ids = event.currentTarget.id;

//   // array.push(ids);
// completed = [ids,...completed];

// console.log(`Length : ${complete.length}`);
 
//   for(let i = 0; i < completed.length; i++){
//     setIsComplete(completed[i]);
//   }
};

let [del ,setDel] = useState(false);

  let [deleteID , setDelID] = useState(false);


  const onDeleteHandler = (event) => {
    

    const ids = event.currentTarget.id; 
    // console.log('TaksList clicked:' + ids); 
    setDel(!del);
      
    setDelID(ids);
    // console.log(ids);
    // closeHandler();

  
  };

// useEffect (() => {
//   
//   closeHandler();
// },[del]

// );  

const [deleted ,setDeleted] = useState(store);

  const deleteListItem = (id) => {
  // console.log("Dlete.js :" + deleteID);
  // console.log("Dlete.js :" + deleteID);
   
   console.log(id);  
    const filteredStore = deleted.filter((task) => task.id !== id);
    // console.log(localStorage);
    setDeleted(filteredStore);

  
    if(filteredStore.length === 0){
      localStorage.removeItem(id);
    };
    console.log(filteredStore);
    
   }

 return (
   <React.Fragment>
   <div className= {styles.div}>
   <ul className = {styles.ul}>
    {store.map((task ) => {
      const checked = complete.includes(task.id);
      
       return(
         <li  className ={styles.list}  key = {task.id}>
        <section className = {`${checked === true ? styles.completeSection : styles.section }`}>
      <div className = {styles.heder}>
        <h3> Task No:{task.id} </h3>
      </div>
      <div className = {styles.task}>
        <h2> {task.des} </h2>
      </div>

      <div className = {styles.btn}>
        <button className =  {`${checked === false ? styles.del : styles.ondel}`} id = {task.id} onClick = {onDeleteHandler } type="submit">Delete</button>
        <button className =  {`${checked === false ? styles.com : styles.comDisabled}`} id = {task.id} onClick ={onCompleteHandler} type='submit'>Complete</button>
      </div>
    </section>
     </li>
  )
  
})}
 </ul>
 </div>
 {del  && <Delete store = {store} id = {deleteID } remove = {() => {deleteListItem(deleteID)}} setDel = {setDel}/>} 
 {store.length === 0 && <NoTasks />}
</React.Fragment>

); 

}

export default TaskList;
