import { FETCH_PRODUCTS,ADD_PRODUCT } from './types';

export const fetchProducts = () => dispatch => {

    fetch('http://localhost:3123/product/list')
        .then(res => res.json())
        .then(products => {
            
            if(products.status === 1){
                dispatch({
                    type : FETCH_PRODUCTS,
                    payload : products.data
                })
            }
        })
}

export const addProduct = productData => dispatch => {

    fetch('http://localhost:3123/addtocart',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(productData)
    })
    .then(res => res.json())
    .then( data => 
        dispatch({
            type : ADD_PRODUCT,
            payload : data
        }) )
        .catch(e => console.log(`Error ${e}`));       
}