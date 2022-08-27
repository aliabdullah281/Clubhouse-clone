import React from 'react'
import style from "../style/explore.module.css";
import {input} from "antd"
import {DownOutlined , FireOutlined} from "@ant-design/icons";
import data from "../data/explore.json"
import SubHeader from '../components/SubHeader';

const Explore = () => {
    const { people, conversation } =  data ;
    console.log(data)

  return (
    <div className={style.exploreContainer}>
       <div className={style.header}>
           <SubHeader pageTitle="EXPLORE" />
           <input style={{
               backgroundColor: "#f4f4f4",width:"100%",borderRadius: "0.8em",padding: "0.3em 1em", border:"none", boxShadow: "none"
               }}
                   size="large"
                   placeholder='Find People and Clubs'
                   prefix={<img src="images/search-icon.png" width="15px" />}
            >
               </input>
       </div>
        <h6> PEOPLE TO FOLLOW </h6>  
        <div className={style.peopleContainer}>
            {people?.map((item) => (
                <div>
                    <div className='d-flex align-items-center'>
                        <img src='/images/pexels-pixabay-34534.jpg' alt=''/>
                        <div className='ml-2'>
                            <h5  className='mx-1'> {item.title} </h5>
                            <p  className='mx-1'> {item.description} </p>
                        </div>
                    </div>
                    <button> Follow </button>
                </div>
            ))}
            <button className={style.showMore}> Show more people <DownOutlined/> </button>
        </div>
        
        <h6> Find conversations about ...</h6>
                    <div className='row mx-0'>
                        {conversation?.map((item) => (
                            <div className='col-6 px-2 mb-3'>
                                <div className={style.conversationCard}>
                                    <h6> <FireOutlined/> 
                                    {item.title}
                                    </h6>
                                    <p> {item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default Explore