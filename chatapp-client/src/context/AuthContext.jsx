import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children}) => {

    const [ users, setUser ] = useState(null);
    const [ registerInfo, setRegisterInfo ] = useState({
        name: "",
        email: "",
        password: "",
    });

    console.log("RegisterInfo", registerInfo);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])

    return (
        <AuthContext.Provider value={{ users, registerInfo, updateRegisterInfo}}>
            { children }
        </AuthContext.Provider>
    )
}