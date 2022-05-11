import {useEffect, useState} from "react";
import produitApi from "../service/produitApi";
import {Link} from "react-router-dom";

const ProduitPage = () => {

    const [produit, setProduit] = useState([]);

    const fetchProduit = async () => {
        try {
            const _produit = await produitApi.getProduit();
            setProduit(_produit)
        } catch ($error) {
            console.log($error)
        }
    }

    useEffect(() => {
        fetchProduit();
    }, [])

    return (
        <>
            <h1 className="text-center mt-3">Page des produits</h1>

            <div className="container">
                <div className="row">
                    {produit.map(produit => {
                        return <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card text-center mt-3">
                                <img src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{produit.libelleProduit}</h5>
                                    <Link to="#" className="btn btn-primary m-2">ACHETER</Link>
                                    <Link to={`/produit/${produit.idProduit}`} className="btn btn-primary">Détails</Link>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </>
    )
}

export default ProduitPage;