import * as actionTypes from "./cart-types";

export const addToCart = (productID) =>{
    return {
        type : actionTypes.ADD_TO_CART,
        payload : {
            id : productID
        }  
    }
}

export const removeFromCart = (productID) =>{
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload : {
            id : productID
        }  
    }
} 

export const adjustyQty = (productID, value) =>{
    return {
        type : actionTypes.ADJUSTY_QTY,
        payload : {
            id : productID,
            qty : value
        }  
    }
} 

// export const loadCurrentItem = (item) =>{
//     return {
//         type : actionTypes.LOAD_CURRENT_ITEM ,
//         payload: item
//     }
// } 

  




export function cartAction(data){
    return (dispatch) => {
        dispatch({payload : data, type : "SET_CURRENT_CART"})
    }
}