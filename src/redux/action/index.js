// For add Item to cart

export const addCart = (product) =>{debugger;
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For delete item from cart

export const deleteItem = (product) =>{
    return{
        type : "DELETE_ITEM",
        payload : product
    }
}