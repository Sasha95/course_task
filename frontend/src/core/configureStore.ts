import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createMainReducer } from "../core/mainReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistWhitelist: Array<keyof IAppState> = ["auth"];
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const composeEnhancers =
  process.env.NODE_ENV === "production"
    ? compose
    : composeWithDevTools({
        shouldHotReload: false,
      });

export function configureStore() {
  const middleware = [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const persistedReducer = persistReducer(persistConfig, createMainReducer());
  const store = createStore(persistedReducer, enhancer);
  // const store: Cards<IAppState, Action> = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  // persistor.purge();
  return { store, persistor };
}