import {
    GET_REPARACIONES,
    GET_REPARACIONES_SUCCESS,
    GET_REPARACIONES_FAIL,
    GET_REPARACION,
    GET_REPARACION_SUCCESS,
    GET_REPARACION_FAIL,
    CREATE_REPARACION,
    CREATE_REPARACION_SUCCESS,
    CREATE_REPARACION_FAIL,
    UPDATE_REPARACION,
    UPDATE_REPARACION_SUCCESS,
    UPDATE_REPARACION_FAIL,
    DELETE_REPARACION,
    DELETE_REPARACION_SUCCESS,
    DELETE_REPARACION_FAIL
} from "../../actions/store/reparacion";

const InitialState = {
    reparacion: {}
}

const reparacionReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_REPARACIONES:
            return { ...state, loading: true };
        case GET_REPARACIONES_SUCCESS:
            return { ...state, loading: false, reparaciones: action.payload };
        case GET_REPARACIONES_FAIL:
            return { ...state, loading: false, error: action.payload };
        case GET_REPARACION:
            return { ...state, loading: true };
        case GET_REPARACION_SUCCESS:
            return { ...state, loading: false, reparacion: action.payload };
        case GET_REPARACION_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CREATE_REPARACION:
            return { ...state, loading: true };
        case CREATE_REPARACION_SUCCESS:
            return { ...state, loading: false, reparaciones: [...state.reparaciones, action.payload] };
        case CREATE_REPARACION_FAIL:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_REPARACION:
            return { ...state, loading: true };
        case UPDATE_REPARACION_SUCCESS:
            return {
            ...state,
            loading: false,
            reparaciones: state.reparaciones.map((reparacion) =>
                reparacion.id === action.payload.id ? action.payload : reparacion
            ),
            };
        case UPDATE_REPARACION_FAIL:
            return { ...state, loading: false, error: action.payload };
        case DELETE_REPARACION:
            return { ...state, loading: true };
        case DELETE_REPARACION_SUCCESS:
            return {
            ...state,
            loading: false,
            reparaciones: state.reparaciones.filter((reparacion) => reparacion.id !== action.payload),
            };
        case DELETE_REPARACION_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default reparacionReducer;