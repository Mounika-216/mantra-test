import React, { useState } from 'react';
import './ContactBlock.css'
import { useDispatch } from 'react-redux';
import { Actions } from '../../Redux/Actions';

const ContactBlock = (props) => {
  const[edit,setEdit] = useState(false)
  let dispatch = useDispatch();

  const deleteConact = () =>{
     dispatch({type:Actions.DELETE_CONTACT,payload:props.user.id})
  };

  const editContact = (event) =>{
     dispatch({type:Actions.EDIT_CONTACT,payload:{[event.target.name]:event.target.value ,id:props.user.id }})
     setEdit(!edit)
  }
  
  return (
    <div className="contactBlock">
     {edit ? <input type='text' name = 'name' className='editInput' onBlur = {editContact} placeholder='edit userName'></input>:<p className='userName'>userName: {props.user.name}</p> }
     <p className='age'>age: {props.user.age}</p>
     {edit ? <input type='email' name = 'email' className='editInput' onBlur = {editContact} placeholder='edit email'></input>:<p className='email'>email: {props.user.email}</p> }
     
      <div className="editBlock">
        <button style={{background:'blue',color:'white',border:'none', padding:'3px 5px'}} onClick={() => {setEdit(!edit)}}>edit</button>
        <button  style={{background:'red',color:'white',border:'none', padding:'3px 5px'}} onClick={deleteConact}>delete</button>
      </div>
   
   </div>
  )
}

export default ContactBlock