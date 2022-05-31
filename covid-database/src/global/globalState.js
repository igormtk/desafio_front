import GlobalStateContext from "./globalStateContext";
import React from "react";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";

const GlobalState = (props) => {
    
    const cases = useRequestData([], `${BASE_URL}/all`)

    const states = { cases }
    const setters = { }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;