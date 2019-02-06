import store from "../../boot/configureStore";

export const get = () => store.getState().services.session;
