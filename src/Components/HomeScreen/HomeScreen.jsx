import React, { useEffect, useState } from 'react';
import './HomeScreen.css'
import AgeBlock from '../AgeBlock/AgeBlock';
import Form from '../Form/Form';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    let users = useSelector((data)=>data.users);
    const[showForm,setShowForm] = useState(false)
    const ageSectors = [{minAge :1 ,maxAge:18},
        {minAge :19 ,maxAge:25},
        {minAge :26 ,maxAge:45},
        {minAge :46 ,maxAge:10000}]

  return (
     <div className="homeScreen">
        <button className='addContactBtn' onClick={()=>setShowForm(!showForm)}>ADD+</button>
        <div className="ageContainer">
           {ageSectors.map((sector,index) => 
                     (<AgeBlock ageLimit = {sector} key={index} users ={users}/>)
            )}
        </div>


     {
        showForm ? <Form/> : ''
     }
     </div>
  )
}

export default HomeScreen