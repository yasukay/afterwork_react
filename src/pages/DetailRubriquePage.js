import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import rubriqueApi from "../service/rubriqueApi";


const ArticleByRubrique= () => {

    const {titre} = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchArticleByRubrique = async () => {
        try {
            const _article = await rubriqueApi.findArticleByRubrique(titre)
            setArticle(_article)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchArticleByRubrique();
    }, [loading])


    return (
        <>
            <h1 className="text-center mt-3">Page de la rubrique {titre}</h1>

            {loading ?
                (article.length > 0) ? (<div className="container">
                    <div className="row">
                        {article.map(article => {
                            return <div className="col-md-4 col-sm-6 mb-3">
                                <div className="card text-center">
                                    <img src="" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{article.titre}</h5>
                                        <Link to={`/article/${article.idArticle}`}
                                              className="btn btn-primary">Détails</Link>
                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>) : (<h5 className="text-center mt-5"> il n'y a pas de produit dans cette rubrique </h5>)

                : <></>
            }

        </>
    )
}

export default ArticleByRubrique;