import TodayDate from "./Dates";
import styles from '../components/Header.module.css';
import React from "react";

function Header(){
    return (
     <header className = {styles.header}>
         <h1 className = {styles.heding}>Today Tasks</h1>
         <TodayDate></TodayDate>
     </header>
     
    );
}

export default Header;