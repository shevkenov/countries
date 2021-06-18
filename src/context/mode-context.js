import React from 'react'

const Context = React.createContext(null);

const ContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = React.useState(true);

    const changeMode = () => setDarkMode(prevMode => !prevMode);

    return (
        <Context.Provider value={{darkMode, changeMode}}>
            {children}
        </Context.Provider>
    )
}

export const useMode = () => {
    const context = React.useContext(Context);

    return context;
}

export default ContextProvider;