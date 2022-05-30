import GlobalStateContext from "./globalStateContext";

const GlobalState = (props) => {

    const states = {}
    const setters = {}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;