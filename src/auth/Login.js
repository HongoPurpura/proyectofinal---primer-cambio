import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {

    const {loginWithRedirect} = useAuth0();
    function handleLogin(){
        loginWithRedirect();
    }
    return (
       <button type ="button" class="btn btn-primary" onClick={() =>(handleLogin())}>
        Acceder
       </button>
    )
}

export default Login