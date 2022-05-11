import axios from "../config/axios";

const getProduit = () => {
    return axios
        .get("produit")
        .then(response=>response.data)
}

const getProduitById = (idProduit) => {
    return axios
        .get(`produit/${idProduit}`)
        .then(response=>response.data)
}


export default {getProduit, getProduitById};