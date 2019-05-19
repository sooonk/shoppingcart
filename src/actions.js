const ADD_ITEM = 'ADD_ITEM';
//action creator
export const addItem = (id) => ({
    type: ADD_ITEM,
    payload: id
})