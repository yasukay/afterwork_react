import React from "react";
import categorieApi from "../service/categorieApi";


const AccueilPage = () => {
    console.log(categorieApi.getCategorie)
    return (
        <h1>Page d'accueil</h1>

    )

}


export default AccueilPage;