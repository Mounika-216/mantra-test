import React, { useEffect, useState } from 'react';
import './Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../Redux/Actions';


const Form = () =>{
    let dispatch = useDispatch()
    let users = useSelector((data)=>data.users);

    const[personName,setPersonName] = useState('');
    const[email,setEmail] = useState('')
    const[age,setAge] = useState('')

    const addContactDetails = () =>{
        // console.log('personName',personName,email,age)
        if(personName !='' && age != '' && email !=''){
        dispatch({type:Actions.ADD_CONTACT,payload:{name:personName,email:email,age:age,id:users.length}});
        setAge('');
        setPersonName('');
        setEmail('')
        }
    }

     return (
        <div className="formContainer">
                    <input type='text' placeholder='Enter Name' name = 'userName' value={personName} onChange={(e)=>{setPersonName(e.target.value)}}></input>
                    <input type='number' placeholder='Enter Age' name='age'value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
                    <input type='email' placeholder='Enter a valid email' autocomplete="off" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <button onClick={addContactDetails}>Add Contact</button>
        </div>
     )
}

export default Form;