import React,{useState, useContext} from "react";
import authApi from "../service/authApi";
import AuthenticatedContext from "../contexts/authenticatedContext";


// Destructuring de l'objet props
const LoginPage = ({ history}) => {

     // State pour le username et le mot de passe
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setIsAuthenticated } = useContext(AuthenticatedContext);

     // Soumission du formulaire
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await authApi.logIn(username, password);
        localStorage.setItem("token", token)
        setIsAuthenticated(true)
        history.replace("/")
     }

    return (

        <>
            <h1 className="text-center mt-3 ">Formulaire de connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto" style={{width: 40 + '%'}}>
                    <div className="text-center"><label htmlFor="exampleInputEmail1" className="form-label"
                                                        placeholder="Entrer votre email">Username</label></div>
                    <input type="text" className="form-control" placeholder={"mail"}
                           id="username" value={username} required
                           onChange={e=>setUsername(e.target.value)}/>

                    <div id="emailHelp" className="form-text">Ce site est safe</div>
                </div>
                <div className="mx-auto text-center" style={{width: 40 + '%'}}>
                    <label htmlFor="inputPassword" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="password" value={password} required
                           onChange={e => setPassword(e.target.value) } />
                    <button type="submit" className="btn btn-primary mt-4 ">Connexion</button>
                </div>
            </form>
        </>

    )
}



export default LoginPage;