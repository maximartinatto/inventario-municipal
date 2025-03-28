import {
    GET_CATEGORIAS,
    GET_CATEGORIAS_SUCCESS,
    GET_CATEGORIAS_FAIL,
    GET_CATEGORIA,
    GET_CATEGORIA_SUCCESS,
    GET_CATEGORIA_FAIL,
    GET_CATEGORIA_DISPOSITIVO,
    CREATE_CATEGORIA,
    CREATE_CATEGORIA_SUCCESS,
    CREATE_CATEGORIA_FAIL,
    CLEAR_CATEGORIA_DISPOSITIVO,
    UPDATE_CATEGORIA,
    UPDATE_CATEGORIA_SUCCESS,
    UPDATE_CATEGORIA_FAIL,
    DELETE_CATEGORIA,
    DELETE_CATEGORIA_SUCCESS,
    DELETE_CATEGORIA_FAIL
} from "../../actions/store/categoria";


const InitialState = {
    categoria: {}
};

const categoriaReducer = (state = InitialState, action) => {
    switch(action.type) {

        case GET_CATEGORIAS: {
            return {
                ...state,
                categoria: action.payload
            }
        } 
        case GET_CATEGORIAS_SUCCESS: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case GET_CATEGORIAS_FAIL: {
            return {
                ...state, 
                categoria: action.payload
            }
        }
        case GET_CATEGORIA: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case GET_CATEGORIA_SUCCESS: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case GET_CATEGORIA_FAIL: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case GET_CATEGORIA_DISPOSITIVO: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case CREATE_CATEGORIA: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case CREATE_CATEGORIA_SUCCESS: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case CREATE_CATEGORIA_FAIL: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case CLEAR_CATEGORIA_DISPOSITIVO: {
            return {
                ...state,
                categoria: {}
            }
        }
        case UPDATE_CATEGORIA: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case UPDATE_CATEGORIA_SUCCESS: {
            return {
                ...state, 
                categoria: action.payload
            }
        }
        case UPDATE_CATEGORIA_FAIL: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case DELETE_CATEGORIA: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case DELETE_CATEGORIA_SUCCESS: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        case DELETE_CATEGORIA_FAIL: {
            return {
                ...state,
                categoria: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default categoriaReducer;