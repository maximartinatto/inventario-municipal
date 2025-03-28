import { combineReducers } from "redux";
import { categoriaReducer } from "../reducer/store/categoria";
import { dispositivoReducer } from "../reducer/store/dispositivo";
import { reparacionReducer } from "../reducer/store/reparacion";
import { sectorReducer } from "../reducer/store/sector";
import { usuarioReducer } from "../reducer/store/usuarioAsignado";
import { userReducer } from "../reducer/user/user";
import { loginReducer } from "../reducer/user/login";
import { logoutReducer } from "../reducer/user/logout";

const rootReducer = combineReducers({
    categoriaReducer,
    dispositivoReducer,
    reparacionReducer,
    sectorReducer,
    usuarioReducer,
    userReducer,
    loginReducer,
    logoutReducer
});

export default rootReducer;