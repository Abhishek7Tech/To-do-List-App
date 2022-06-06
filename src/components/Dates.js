import styles from './Dates.module.css';

const date = new Intl.DateTimeFormat('ISO').format(new Date());
console.log(date);

function TodayDate() {
        
    return(
       <div className = {styles.date}>
          <h2 className = {styles.dates}>Date - {date}</h2>
          </div>
    );
}

export default TodayDate;