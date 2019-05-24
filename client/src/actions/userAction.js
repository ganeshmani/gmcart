import { LOGIN_USER,REGISTER_USER,LOGOUT_USER } from './types';



export const loginUser = userData => dispatch => {
    
    fetch('http://localhost:3123/login',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => {
        console.log("user",user);
        if(user.status === 1){
            dispatch({
                type : LOGIN_USER,
                payload : user.data
            })
        }
        
    })
    .catch(error => console.log(`Error -> ${error}`))    
}

export const registerUser = userData => dispatch => {

    fetch('http://localhost:3123/register',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => 
        {
            if(user.status === 1){

                dispatch({
                    type : REGISTER_USER,
                    payload : user.data
                })
            }
        }
        )
        .catch(error => console.log(error))
}

export const logoutUser = () => dispatch => {


    dispatch({
        type : LOGOUT_USER,
        payload : null
    });

}