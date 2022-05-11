import React, {useContext} from "react";
import {Link} from "react-router-dom";
import authApi from "../service/authApi";
import AuthenticatedContext from "../contexts/authenticatedContext";

const Header = ({history, onLogOut}) => {

    const {isAuthenticated, setIsAuthenticated} = useContext(AuthenticatedContext);

    // Mettre à jour la variable isAuthenticated dans le state du composant App
    const handleLogOut = () => {
        authApi.logOut();
        setIsAuthenticated(false);
        history.push("/login")
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">Afterworks</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Accueil</Link>
                        </li>
                        {(isAuthenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to={"/produit"}>Produits</Link>
                            </li>
                        )) || (
                            <>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/categories"}>Catégories</Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to={"/rubriques"}>Rubriques</Link>
                            </li>
                            </>
                        )}
                    </ul>

                </div>
                <div>
                    <ul className="navbar-nav ml-auto">
                        {(!isAuthenticated && (
                            <li className="nav-item me-2">
                                <Link className="nav-link btn-outline-success " to="/connexion">connexion</Link>
                            </li>
                        )) || (
                            <li className="nav-item">
                                <button className="nav-link btn-danger" onClick={handleLogOut}>Déconnexion</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header






