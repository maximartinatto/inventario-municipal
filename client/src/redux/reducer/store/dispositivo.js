import {
    GET_DISPOSITIVOS,
    GET_DISPOSITIVOS_SUCCESS,
    GET_DISPOSITIVOS_FAIL,
    GET_DISPOSITIVO,
    GET_DISPOSITIVO_SUCCESS,
    GET_DISPOSITIVO_FAIL,
    GET_DETAIL_DISPOSITIVO,
    CREATE_DISPOSITIVO,
    CREATE_DISPOSITIVO_SUCCESS,
    CREATE_DISPOSITIVO_FAIL,
    CLEAR_DISPOSITIVO_DETAIL,
    UPDATE_DISPOSITIVO_ESTADO,
    UPDATE_DISPOSITIVO,
    UPDATE_DISPOSITIVO_SUCCESS,
    UPDATE_DISPOSITIVO_FAIL,
    DELETE_DISPOSITIVO,
    DELETE_DISPOSITIVO_SUCCESS,
    DELETE_DISPOSITIVO_FAIL
} from "../../actions/store/dispositivo";

const InitialState = {
    dispositivo: {}
}

const dispositivoReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_DISPOSITIVOS:
            return { ...state, loading: true };
        case GET_DISPOSITIVOS_SUCCESS:
            return { ...state, loading: false, dispositivos: action.payload };
        case GET_DISPOSITIVOS_FAIL:
            return { ...state, loading: false, error: action.payload };
        case GET_DISPOSITIVO:
            return { ...state, loading: true };
        case GET_DISPOSITIVO_SUCCESS:
            return { ...state, loading: false, dispositivo: action.payload };
        case GET_DISPOSITIVO_FAIL:
            return { ...state, loading: false, error: action.payload };
        case GET_DETAIL_DISPOSITIVO:
            return { ...state, dispositivoDetail: action.payload };
        case CREATE_DISPOSITIVO:
            return { ...state, loading: true };
        case CREATE_DISPOSITIVO_SUCCESS:
            return { ...state, loading: false, dispositivos: [...state.dispositivos, action.payload] };
        case CREATE_DISPOSITIVO_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CLEAR_DISPOSITIVO_DETAIL:
            return { ...state, dispositivoDetail: null };
        case UPDATE_DISPOSITIVO_ESTADO:
            return { 
            ...state, 
            dispositivos: state.dispositivos.map(dispositivo =>
                dispositivo.id === action.payload.id
                ? { ...dispositivo, estado: action.payload.estado }
                : dispositivo
            )
            };
        case UPDATE_DISPOSITIVO:
            return { ...state, loading: true };
        case UPDATE_DISPOSITIVO_SUCCESS:
            return { 
            ...state, 
            loading: false, 
            dispositivos: state.dispositivos.map(dispositivo =>
                dispositivo.id === action.payload.id
                ? { ...dispositivo, ...action.payload }
                : dispositivo
            )
            };
        case UPDATE_DISPOSITIVO_FAIL:
            return { ...state, loading: false, error: action.payload };
        case DELETE_DISPOSITIVO:
            return { ...state, loading: true };
        case DELETE_DISPOSITIVO_SUCCESS:
            return { 
            ...state, 
            loading: false, 
            dispositivos: state.dispositivos.filter(dispositivo => dispositivo.id !== action.payload) 
            };
        case DELETE_DISPOSITIVO_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default dispositivoReducer;