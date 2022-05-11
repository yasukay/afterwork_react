import axios from "../config/axios";


const getArticle= () => {
    return axios
        .get("article")
        .then(response=>response.data)
}

const findCategorieByProduit = (idArticle) => {
    return axios
        .get(`articles/${idArticle}`)
        .then(response => response.data)
}

const getArticleById = (idArticle) => {
    return axios
        .get(`article/${idArticle}`)
        .then(response=>response.data)
}


export default {getArticle, findCategorieByProduit,getArticleById}
