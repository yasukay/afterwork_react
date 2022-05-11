import {useEffect, useState} from "react";
import categorieApi from "../service/categorieApi";
import {Link} from "react-router-dom";


const CategoriePage = () => {

    const [listeCategories, setCategorie] = useState([]);

    const fetchCategories = async () => {
        try {
            const categorie = await categorieApi.getCategorie();
            setCategorie(categorie);
        } catch (error) {
            console.log(error);
        }
    };

    // console.log(listeCategories)

    useEffect(() => {
        fetchCategories();
    }, []);

    return(
        <>
            <h1 className="text-center mt-3">Page de toutes les catégories :</h1>
        <div className="container">
            <div className="row">
                    {listeCategories.map((categorie) => {
                        return <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card text-center mt-3">
                                <img src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">
                                    {categorie.libelleCategorie}
                                    </h5>
                                    <Link to={`/categorie/${categorie.libelleCategorie}`}
                                          className="btn btn-primary ">voir</Link>
                                </div>
                            </div>
                        </div>

                    })}
                        </div>
                    </div>
                </>
    )
}


export default CategoriePage;