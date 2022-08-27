import React from 'react'
import {Link} from "react-router-dom"
import style from "../style/header.module.css"

const Header = () => {
  return (
    <div className={style.Header}>
        <Link exact to="/explore">
            <img src='/images/search-icon.png' />
         </Link>
         <div className={style.nav_items}>
             
             <Link exact to="">
                 <img src='/images/calendar-icon.jpg'/>
             </Link>
             
             <Link exact to="">
                 <img src='/images/notify.png'/>
             </Link>
             
             <Link exact to="/profile">
                 <img src='/images/art.jpg'/>
             </Link>
         </div>
    </div>

  )
}

export default Header