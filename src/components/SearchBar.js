import Axios from "axios";
import React, { Fragment, useState } from "react";
import celebritySlices from "../reducers/slices/celebritySlices";
import Celebrities_List from "./Celebrities_List";
import Home from "../pages/Home";

const SearchBar = () => {

    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();
    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const nombre = 'Michael Jordan'
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        Axios.get(url, { headers })
            .then(res => {
                setCelData(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <Fragment>
            <div>
                <nav class="navbar bg-body-tertiary">

                    <div class="container-fluid">

                        <div className="search">

                            <input class="form-control me-2" type="text" placeholder="Digite su búsqueda" aria-label="Digite su búsqueda" onChange={handleChange}></input>

                            <br></br>

                            <button class="btn btn-outline-primary" onClick={getCelData}>Buscar</button>

                        </div>

                    </div>

                </nav>
                {celData ? (<Celebrities_List celebrities={celData} />) : (<Home />)}
            </div>
        </Fragment>
    )
}

export default SearchBar