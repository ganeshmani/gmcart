import { LOGIN_USER,REGISTER_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
    user : {},
    products : []
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                user : action.payload
            }
        
        case REGISTER_USER:
            return {
                ...state,
                user : action.payload
            } 
            
        case LOGOUT_USER:
            return {
                ...state,
                user : {}
            }    

        default:
            return state    
    }
}