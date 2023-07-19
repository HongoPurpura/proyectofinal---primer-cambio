import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    const key='UHl/RutbWUc9p0t6ldOJYA==infJzZFhKh3zW6SU';
    const headers = {
        'X-Api-Key': key,
    }
    const nombre = 'Michael Jordan'
    const url = 'https://api.api-ninjas.com/v1/celebrity?name='+nombre;
    useEffect(() => {
        Axios.get(url, {headers})
        .then(resp=>{console.log(resp.data)})
        .catch(error=>{console.log(error)})
},[])
    if (isLoading){
        return <div> Cargando ... </div>
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>Correo electrónico: {user.email}</p>
            </div>
        )

    );
}

export default Home