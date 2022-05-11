import axios from "../config/axios";

const getRubrique = () => {
    return axios
        .get("rubriques")
        .then(response=> response.data)
}

const findArticleByRubrique = (rubrique) => {
    return axios
        .get(`articles/${rubrique}`)
        .then(response=>response.data)
}

export default {getRubrique,findArticleByRubrique};