import {
    GET_SECTORES,
    GET_SECTORES_SUCCESS,
    GET_SECTORES_FAIL,
    GET_SECTOR,
    GET_SECTOR_SUCCESS,
    GET_SECTOR_FAIL,
    CREATE_SECTOR,
    CREATE_SECTOR_SUCCESS,
    CREATE_SECTOR_FAIL,
    UPDATE_SECTOR,
    UPDATE_SECTOR_SUCCESS,
    UPDATE_SECTOR_FAIL,
    DELETE_SECTOR,
    DELETE_SECTOR_SUCCESS,
    DELETE_SECTOR_FAIL
} from "../../actions/store/sector";

const InitialState = {
    sector: {}
}

const sectorReducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_SECTORES:
            return { ...state, loading: true };
        case GET_SECTORES_SUCCESS:
            return { ...state, loading: false, sectores: action.payload };
        case GET_SECTORES_FAIL:
            return { ...state, loading: false, error: action.payload };
        case GET_SECTOR:
            return { ...state, loading: true };
        case GET_SECTOR_SUCCESS:
            return { ...state, loading: false, sector: action.payload };
        case GET_SECTOR_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CREATE_SECTOR:
            return { ...state, loading: true };
        case CREATE_SECTOR_SUCCESS:
            return { ...state, loading: false, sectores: [...state.sectores, action.payload] };
        case CREATE_SECTOR_FAIL:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_SECTOR:
            return { ...state, loading: true };
        case UPDATE_SECTOR_SUCCESS:
            return {
            ...state,
            loading: false,
            sectores: state.sectores.map(sector =>
                sector.id === action.payload.id ? action.payload : sector
            )
            };
        case UPDATE_SECTOR_FAIL:
            return { ...state, loading: false, error: action.payload };
        case DELETE_SECTOR:
            return { ...state, loading: true };
        case DELETE_SECTOR_SUCCESS:
            return {
            ...state,
            loading: false,
            sectores: state.sectores.filter(sector => sector.id !== action.payload)
            };
        case DELETE_SECTOR_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default sectorReducer;