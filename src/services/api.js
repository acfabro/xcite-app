import { create } from "apisauce";
import store from "../reducers";
import Config from "../../config";

const api = create({
    baseURL: Config.api.url,
    timeout: Config.api.timeout,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
});

// if (store.auth.accessToken !== undefined) {
//     api.setHeader("Authorization", "Bearer " + store.auth.accessToken);
// }

export default api;
