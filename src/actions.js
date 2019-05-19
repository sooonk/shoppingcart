const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
//action creator
export const addItem = (id) => ({
    type: ADD_ITEM,
    payload: id
})
export const removeItem = (id) => ({
    type:REMOVE_ITEM,
    payload: id,
})

//action creator
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const productsRequest = ()=>({
    type: PRODUCT_REQUEST,
})
export const PRODUCT_REQUEST_SUCCESS = 'PRODUCT_REQUEST_SUCCESS';
const productsRequestSuccess = (products)=>({
    type: PRODUCT_REQUEST_SUCCESS,
    payload: products,
})
export const fetchProducts = ()=>(dispatch) => {
    dispatch(productsRequest());
    fetch('https://jfdzs3.firebaseio.com/items.json')
    .then(response => response.json())
    .then(products => {
        dispatch(productsRequestSuccess(products))
    })
    ;
}