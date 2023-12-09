import React, { useEffect, useState } from 'react';
import './AgeBlock.css';
import ContactBlock from '../ContactBlock/ContactBlock';

const AgeBlock = (props) => {
    let [userData,setUserData] = useState([]);
    const[sort,setSort] = useState(false)

    useEffect(() =>{
        let curentAgeUsers = props.users.filter((user)=> (user.age <= props.ageLimit.maxAge &&  user.age >= props.ageLimit.minAge) );
        setUserData(curentAgeUsers);
    },[props])
    
    const onSorting = () =>{
    setSort(!sort)
      let data = userData.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
            }
            return 0;
        });

        setUserData(data)
    }

  return (
    <div className='ageBlock'>
        <div className="headbar">
        <p>Age-Limit:<span>{props.ageLimit.minAge} - {props.ageLimit.maxAge}</span></p>
        <button onClick={onSorting} style={{background:'green',color:'white'
        }}>SORT </button>
        </div>
        {userData.map((user)=> {
            return <ContactBlock user ={user}/>
        })

        }
    </div>
  )
}

export default AgeBlock