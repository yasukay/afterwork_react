import axios from "../config/axios";

const getCategorie = () => {
return axios
    .get("categories")
    .then(response=> response.data)
}


const getCategorieById = (idCategorie) => {
    return axios
        .get(`categorie/${idCategorie}`)
        .then(response=>response.data)
}

const findProduitByCategorie = (categorie) => {
    return axios
        .get(`categories/${categorie}`)
        .then(response=>response.data)
}

const findCategorieByProduit = (idProduit) => {
    return axios
        .get(`produits/${idProduit}`)
        .then(response => response.data)
}


export default {getCategorie, getCategorieById,findProduitByCategorie,findCategorieByProduit};