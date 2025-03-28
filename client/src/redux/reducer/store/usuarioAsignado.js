import {
    GET_USUARIOS_ASIGNADOS,
    GET_USUARIOS_ASIGNADOS_SUCCESS,
    GET_USUARIOS_ASIGNADOS_FAIL,
    GET_USUARIO_ASIGNADO,
    GET_USUARIO_ASIGNADO_SUCCESS,
    GET_USUARIO_ASIGNADO_FAIL,
    CREATE_USUARIO_ASIGNADO,
    CREATE_USUARIO_ASIGNADO_SUCCESS,
    CREATE_USUARIO_ASIGNADO_FAIL,
    UPDATE_USUARIO_ASIGNADO,
    UPDATE_USUARIO_ASIGNADO_SUCCESS,
    UPDATE_USUARIO_ASIGNADO_FAIL,
    DELETE_USUARIO_ASIGNADO,
    DELETE_USUARIO_ASIGNADO_SUCCESS,
    DELETE_USUARIO_ASIGNADO_FAIL
} from "../../actions/store/usuarioAsignado";

const InitialState = {
    usuarioAsignado: {}
}

const usuarioReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_USUARIOS_ASIGNADOS:
        case GET_USUARIO_ASIGNADO:
        case CREATE_USUARIO_ASIGNADO:
        case UPDATE_USUARIO_ASIGNADO:
        case DELETE_USUARIO_ASIGNADO:
            return {
            ...state,
            loading: true,
            error: null
            };

        case GET_USUARIOS_ASIGNADOS_SUCCESS:
            return {
            ...state,
            loading: false,
            usuariosAsignados: action.payload
            };

        case GET_USUARIO_ASIGNADO_SUCCESS:
            return {
            ...state,
            loading: false,
            usuarioAsignado: action.payload
            };

        case CREATE_USUARIO_ASIGNADO_SUCCESS:
        case UPDATE_USUARIO_ASIGNADO_SUCCESS:
        case DELETE_USUARIO_ASIGNADO_SUCCESS:
            return {
            ...state,
            loading: false,
            success: true
            };

        case GET_USUARIOS_ASIGNADOS_FAIL:
        case GET_USUARIO_ASIGNADO_FAIL:
        case CREATE_USUARIO_ASIGNADO_FAIL:
        case UPDATE_USUARIO_ASIGNADO_FAIL:
        case DELETE_USUARIO_ASIGNADO_FAIL:
            return {
            ...state,
            loading: false,
            error: action.payload
            };

        default:
            return state;
    }
}

export default usuarioReducer;