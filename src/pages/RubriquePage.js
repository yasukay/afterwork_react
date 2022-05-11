import {useEffect, useState} from "react";
import rubriqueApi from "../service/rubriqueApi";
import {Link} from "react-router-dom";

const RubriquePage = () => {
    const [listeRubriques, setRubrique] = useState([]);

    const fetchRubriques = async () => {
        try {
            const rubrique = await rubriqueApi.getRubrique();
            setRubrique(rubrique);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRubriques();
    }, []);


    return(
        <>
            <h1 className="text-center mt-3">Page de toutes les rubriques :</h1>
            <div className="container">
                <div className="row">
                    {listeRubriques.map((rubrique) => {
                        return <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card text-center mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {rubrique.titre}
                                    </h5>
                                    <Link to={`/rubrique/${rubrique.titre}`}
                                          className="btn btn-primary ">voir les articles de cette catégorie</Link>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </>
    )
}
export default RubriquePage;