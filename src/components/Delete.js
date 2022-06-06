import React, {  useState } from "react";
import styles from "./Delete.module.css";

function Delete(props) {
  //  console.log();

  const store = props.store;
  const [no, setNo] = useState(false);


  console.log("Length :" + store.length);
  const noBtnHandler = () => {
    // console.log("clicked");
    setNo(!no);
    props.setDel(false);
  };

  const yesBtnHandler = () => {
    //   onDelete;
    // localStorage.clear();
    props.remove(props.id);
        //  console.log(...store);
    //   console.log(deleted);
    // console.log('clicked');
    setNo(!no);
    props.setDel(false);

    
    // props.setDel(false);
  };

  return (
    <div className={`${no === false ? styles.del : styles.delOn}`}>
      <section>
        <div>
          <h3>Are you Sure ?</h3>
        </div>
        <div>
          <button type="button" onClick={yesBtnHandler}>
            {" "}
            Yes{" "}
          </button>
          <button type="button" onClick={noBtnHandler}>
            {" "}
            No{" "}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Delete;
