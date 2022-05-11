import axios from "../config/axios";
import jwtDecode from "jwt-decode";

const logIn = (username, password) => {
    return axios
        .post("login.php",{"username":username, "password": password})
        .then(response => response.data.token)
}

const logOut = () => {
    localStorage.removeItem("token");
}

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        return payload.exp * 1000 > new Date().getTime();
    }
    return false;
}

export default {logIn, logOut, isAuthenticated};