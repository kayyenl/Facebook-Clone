import React from 'react';


// we will import these two consts later.

//this should be used for the stateprovider intiailization
export const initialState = {
    user: null
}

//this should be used when we make use of reducer.
export const actionTypes = {
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {    
                ...state,
                user: action.user,
            }
        default: 
            return state
    }
}

export default reducer;
