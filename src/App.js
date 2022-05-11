// import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react"
import Header from "./components/header";
import ErrorPage from "./pages/ErrorPage";
import AccueilPage from "./pages/AccueilPage";
import ProduitPage from "./pages/ProduitPage";
import LoginPage from "./pages/LoginPage";
import CategoriePage from "./pages/CategoriePage"
import DetailProduit from "./pages/DetailProduit";
import ProduitByCategorie from "./pages/ProduitByCategorie";
import authApi from "./service/authApi";
import AuthenticatedContext from "./contexts/authenticatedContext";
import RubriquePage from "./pages/RubriquePage";
import DetailRubriquePage from "./pages/DetailRubriquePage"
import DetailArticle from "./pages/DetailArticle"

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(authApi.isAuthenticated());

    const AuthentificatedContextValue = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
    }

    return (
        <AuthenticatedContext.Provider value={AuthentificatedContextValue}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<AccueilPage/>}/>
                    <Route exact path="/produit" element={<ProduitPage/>}/>
                    <Route exact path="/produit/:idProduit" element={<DetailProduit/>}/>
                    <Route exact path="/categories" element={<CategoriePage/>}/>
                    <Route exact path="/categorie/:libelleCategorie" element={<ProduitByCategorie/>}/>
                    <Route exact path="/rubriques" element={<RubriquePage/>}/>
                    <Route exact path="/rubrique/:titre" element={<DetailRubriquePage/>}/>
                    <Route exact path="/article/:idArticle" element={<DetailArticle/>}/>
                    <Route path="/connexion" element={<LoginPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthenticatedContext.Provider>
    );
}

export default App;
