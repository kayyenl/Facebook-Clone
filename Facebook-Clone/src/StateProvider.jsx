import React, { createContext, useContext, useReducer } from 'react';


// preparing the data layer
export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>  
            {children}    
        </StateContext.Provider>
    );
}

//we use this tool when we wish to use the context.
export const useStateValue = () => 
    useContext(StateContext)
