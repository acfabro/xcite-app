import Config from "../../../config";
import api from "../api";

api.login = ({username, password}) => {
    return api.post("/oauth/token", {
        "grant_type": "password",
        "client_id": Config.api.clientId,
        "client_secret": Config.api.clientSecret,
        "username": username,
        "password": password,
        "scope": "*",
    });
};

export default api;
