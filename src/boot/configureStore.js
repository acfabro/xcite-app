import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081});
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      realtime: true, port: 8081
    }) : compose;

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
