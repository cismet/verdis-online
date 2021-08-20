import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import kassenzeichenReducer from "./modules/kassenzeichen";
import mappingReducer from "./modules/mapping";
import authReducer from "./modules/auth";
import uiStateReducer from "./modules/uiState";
import { persistReducer } from "redux-persist";
import localForage from "localforage";

const uiStateStorageConfig = {
    key: "uiState",
    storage: localForage,
    whitelist: [
        "d3Available",
        "settingsVisible",
        "applicationMenuVisible",
        "applicationMenuActiveKey",
        "changeRequestEditViewVisible",
        "changeRequestEditViewFlaeche",
        "changeRequestEditViewCR",
        // "changeRequestsMenuVisible",
        "changeRequestsEditMode"
    ]
};

const authStorageConfig = {
    key: "auth",
    storage: localForage,
    whitelist: ["user", "password", "stac"]
};
const mappingStorageConfig = {
    key: "mapping",
    storage: localForage,
    whitelist: ["selectedBackgroundIndex"]
};

const rootReducer = combineReducers({
    kassenzeichen: kassenzeichenReducer,
    mapping: persistReducer(mappingStorageConfig, mappingReducer),
    uiState: persistReducer(uiStateStorageConfig, uiStateReducer),
    auth: persistReducer(authStorageConfig, authReducer),
    routing: routerReducer
});
export default rootReducer;
