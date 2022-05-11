import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import categorieApi from "../service/categorieApi";


const ProduitByCategorie = () => {

    const {libelleCategorie} = useParams();
    const [produit, setProduit] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProduitByCategorie = async () => {
        try {
            const _produit = await categorieApi.findProduitByCategorie(libelleCategorie)
            setProduit(_produit)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduitByCategorie();
    }, [loading])


    return (
        <>
            <h1 className="text-center mt-3">Page de la catégorie {libelleCategorie}</h1>

            {loading ?
                (produit.length > 0) ? (<div className="container">
                    <div className="row">
                        {produit.map(produit => {
                            return <div className="col-md-4 col-sm-6 mb-3">
                                <div className="card text-center">
                                    <img src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{produit.libelleProduit}</h5>
                                        <Link to="#" className="btn btn-primary m-2">ACHETER</Link>
                                        <Link to={`/produit/${produit.idProduit}`}
                                              className="btn btn-primary">Détails</Link>
                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>) : (<h5 className="text-center mt-5"> il n'y a pas de produit dans cette catégorie </h5>)

                : <></>
            }

        </>
    )
}

export default ProduitByCategorie;