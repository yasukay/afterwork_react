import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import articleApi from "../service/articleApi";

const DetailArticle = () => {

    const [article, setArticle] = useState([]);
    const {idArticle} = useParams();


    const fetchArticleById = async () => {
        try {
            const _article = await articleApi.getArticleById(idArticle);
            setArticle(_article)
        } catch ($error) {
            console.log($error)
        }
    }

    useEffect(() => {
        fetchArticleById();
    }, [])

    return (
        <>
            <h1 className="text-center mt-3">{article.titre} </h1>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-12">
                        <div className="card text-center row justify-content-center align-items-center">
                            <div className="card-body">
                                <h5 className="card-title">contenu : </h5>
                                <p  className="card-text">{article.contenu}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DetailArticle;