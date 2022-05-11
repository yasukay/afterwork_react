import {useEffect, useState} from "react";
import produitApi from "../service/produitApi";
import {Link, useParams} from "react-router-dom";


const DetailProduit = () => {

    const [produit, setProduit] = useState([]);
    const {idProduit} = useParams();


    const fetchProduitById = async () => {
        try {
            const _produit = await produitApi.getProduitById(idProduit);
            setProduit(_produit)
        } catch ($error) {
            console.log($error)
        }
    }

    useEffect(() => {
        fetchProduitById();
    }, [])


    return (
        <>
            <h1 className="text-center mt-3">{produit.libelleProduit} </h1>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-12">
                        <div className="card text-center row justify-content-center align-items-center">
                            <img  src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=" className="card-img-top w-50" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Description : </h5>
                                <p  className="card-text">{produit.descriptionProduit}</p>
                                <h5 className="card-title">prix : {produit.prixUnitaireHt} € </h5>
                                <Link to="#" className="btn btn-primary m-2">ACHETER</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DetailProduit;