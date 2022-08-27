import React from 'react'
import style from "../style/dailyInfoCard.module.css"
import Header from '../components/Header'
import data from '../data/dailyCard.json'

const DailyInfoCard = () => {
    console.log(data[0].title)
    return (
    <div className={style.dailyCard}>
        {/* <Header />
        <dailyInfoCard /> */}
  
        {/* <h1> {data[0].title}</h1> */}
       {data.map((item) => (
        //    return (
           <div>
               <span className=''>{item.time}</span>
            <div>
                <span> {item.title} </span>
                <p> {item.description}</p>
            </div>
           </div>
        //    )
       ))}
    
        </div>
  )
}

export default DailyInfoCard