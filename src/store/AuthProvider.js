import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider=(props)=>{

    const [token,setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler=(token)=>{
        setToken(token)
    }

    const logoutHandler=()=>{
        setToken(null);
    }

    const authContent={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler

    }
    return <
        AuthContext.Provider value={authContent}>
        {props.children}
        </AuthContext.Provider>
}

export default AuthProvider;