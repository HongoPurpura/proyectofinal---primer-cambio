import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Loguot = () => {
    const {logout} = useAuth0();
    return (
        <button onClick={()=>logout({returnTo: window.location.origin})}>
            Cerrar Sesión
        </button>
    )
}

export default Loguot