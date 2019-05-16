import { FETCH_PRODUCTS,ADD_PRODUCT } from '../actions/types';

const initialState = {
    user : {},
    products : []
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS:
            
            return {
                ...state,
                products : action.payload
            }
        
        case ADD_PRODUCT:
            return {
                ...state,
                user : action.payload
            }    

        default:
            return state    
    }
}