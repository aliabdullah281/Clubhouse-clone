import React, {useState, useEffect} from 'react'
// import style from "../style/roomCard.module.css"

import data from "../data/roomCard.json"
//import style from '../style/RoomInfoCard.module.css'
import style from "../style/roomCard.module.css"
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";
import styles from '../style/mystyle.module.css'; 
const RoomInfoCard = (props) => {
      
    return (
    <>
    
        {/* {data.map((item) => JSON.stringify(item))} */}
        {data.map((item) => (
        <div>
            <div>
                <div className={ styles.roomCardContainer }> 
                
                <h6 > { item.title } </h6>
                <h2 >   {item.sub_title}    </h2>
                 <div className={styles.roomMembers}>
                 
                     <div >
                        <img  src="/images/pexels-asim-alnamat-343717.jpg"  />
                        <img  src="/images/pexels-mohamed-abdelghaffar-771742.jpg "   />
                     </div>
                     <div> 
                         {item.members?.map((person) => (
                            <p > {person.first_name} {person.last_name} <BsChatDots /> </p>
                         ))}
                         <p className='d-flex align-items-center'>
                             <span className='mr-2'>1.8 </span>
                             <BsFillPersonFill/>
                             <span className='mx-2'></span>{" "}
                             <span className='mr-2'>  5 </span> <BsChatDots Fill/>
                             
                         </p>
                     </div>
                 </div>
                </div>
            </div>
        </div>
         ) )}
    </>
  )
}

export default RoomInfoCard