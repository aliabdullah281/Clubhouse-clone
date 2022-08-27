import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/explore.module.css'
// import { Link  } from 'react-router-dom'

const SubHeader = (props) => {
  return (
    <div>
        {/* <h3> {props.pageTitle} </h3> */}
        <div className={style.head}>
            <Link to="/home"> 
            <img src='images/arrow.png' alt=''  />
             </Link>
      
             <h3  > {props.pageTitle}</h3>
        </div>
    </div>
  )
}

export default SubHeader