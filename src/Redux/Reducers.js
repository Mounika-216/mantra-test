import {combineReducers} from 'redux';

const initailUserList = []


const users = (state =initailUserList,action) =>{
    switch(action.type){
        case 'ADD_CONTACT': 
            let contact =[...state,action.payload];
            return contact;
        
        case 'EDIT_CONTACT':
           let editContact = state.find((contact)=>contact.id == action.payload.id);
            
            if(action.payload.name != undefined){
                editContact.name = action.payload.name
            }
                
            if(action.payload.age != undefined){
                editContact.age = action.payload.age
            }
                
            if(action.payload.email != undefined){
                editContact.email = action.payload.email
            }
            
            return state;
        
        case 'DELETE_CONTACT':
            let contacts = state.filter((contact) => (contact.id!= action.payload));
            return contacts;
        
        default:
            return state ;

    }
    
}

const allReducers = combineReducers({users})

export default allReducers
