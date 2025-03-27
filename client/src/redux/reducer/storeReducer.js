const initialState = {
  dispositivos: [],
  dispositivoDetail: [],
  categorias: [],
  categoriasDispositivos: [],
  sectores: [],
  reparaciones: [],
  usuariosAsignados: [],
  loading: false,
  error: null,
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    // === DISPOSITIVOS ===
    case "GET_DISPOSITIVOS":
    case "GET_DISPOSITIVO":
    case "GET_DETAIL_DISPOSITIVO":
    case "CREATE_DISPOSITIVO":
    case "CLEAR_DISPOSITIVO_DETAIL":
    case "UPDATE_DISPOSITIVO":
    case "UPDATE_DISPOSITIVO_ESTADO":
    case "DELETE_DISPOSITIVO":
    case "GET_DISPOSITIVOS_BY_SECTOR":
    case "GET_DISPOSITIVOS_BY_USUARIO":
      return { ...state, loading: true, error: null };

    case "GET_DISPOSITIVOS_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };
    case "GET_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: state.dispositivos.concat(action.payload),
        loading: false,
      };
    case "GET_DETAIL_DISPOSITIVO":
      return {...state, dispositivos: action.payload}
    case "CREATE_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: [...state.dispositivos, action.payload],
        loading: false,
      };
    case "CLEAR_DISPOSITIVO_DETAIL":
      return {
        ...state,
        dispositivoDetail: {}, // Limpia los detalles del dispositivo
      };
    case "UPDATE_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: state.dispositivos.map((dis) =>
          dis.id === action.payload.id ? action.payload : dis
        ),
        loading: false,
      };
    case "UPDATE_DISPOSITIVO_ESTADO":
      return {
        ...state,
        dispositivos: state.dispositivos.map((dis) =>
          dis.id === action.payload.id ? action.payload : dis
        ),
        loading: false,
      };
    case "DELETE_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: state.dispositivos.filter(
          (dis) => dis.id !== action.payload
        ),
        loading: false,
      };
    case "GET_DISPOSITIVOS_BY_SECTOR_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };
    case "GET_DISPOSITIVOS_BY_USUARIO_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };

    // === ERRORES ===
    case "GET_DISPOSITIVOS_FAIL":
    case "GET_DISPOSITIVO_FAIL":
    case "CREATE_DISPOSITIVO_FAIL":
    case "UPDATE_DISPOSITIVO_FAIL":
    case "DELETE_DISPOSITIVO_FAIL":
    case "GET_DISPOSITIVOS_BY_SECTOR_FAIL":
    case "GET_DISPOSITIVOS_BY_USUARIO_FAIL":
      return { ...state, loading: false, error: action.payload };

    // === CATEGORÍAS ===
    case "GET_CATEGORIAS":
    case "GET_CATEGORIA":
    case "GET_CATEGORIA_DISPOSITIVO":
    case "CREATE_CATEGORIA":
    case "CLEAR_CATEGORIA_DISPOSITIVO":
    case "UPDATE_CATEGORIA":
    case "DELETE_CATEGORIA":
    case "GET_SECTORES":
    case "GET_SECTOR":
    case "CREATE_SECTOR":
    case "UPDATE_SECTOR":
    case "DELETE_SECTOR":
    case "GET_REPARACIONES":
    case "GET_REPARACION":
    case "CREATE_REPARACION":
    case "UPDATE_REPARACION":
    case "DELETE_REPARACION":
    case "GET_USUARIOS_ASIGNADOS":
    case "GET_USUARIO_ASIGNADO":
    case "CREATE_USUARIO_ASIGNADO":
    case "DELETE_USUARIO_ASIGNADO":
      return { ...state, loading: true, error: null };

    case "GET_CATEGORIAS_SUCCESS":
      return { ...state, categorias: action.payload, loading: false };
    case "GET_CATEGORIA_SUCCESS":
      return {
        ...state,
        categorias: state.categorias.concat(action.payload),
        loading: false,
      };
    case "CREATE_CATEGORIA_SUCCESS":
      return {
        ...state,
        categorias: [...state.categorias, action.payload],
        loading: false,
      };
    case "CLEAR_CATEGORIA_DISPOSITIVO":
      return {
        ...state,
        categorias: [], // Limpia las categorías de dispositivos
      };
    case "UPDATE_CATEGORIA_SUCCESS":
      return {
        ...state,
        categorias: state.categorias.map((cat) =>
          cat.id === action.payload.id ? action.payload : cat
        ),
        loading: false,
      };
    case "DELETE_CATEGORIA_SUCCESS":
      return {
        ...state,
        categorias: state.categorias.filter((cat) => cat.id !== action.payload),
        loading: false,
      };
    
    // CATEGORIA-DISPOSITIVOS
    case "GET_CATEGORIA_DISPOSITIVO":
      return {
          ...state,
          categorias: action.payload,
          error: null, // Limpiar error en caso de éxito
      };

    // === SECTORES ===
    case "GET_SECTORES_SUCCESS":
      return { ...state, sectores: action.payload, loading: false };
    case "GET_SECTOR_SUCCESS":
      return {
        ...state,
        sectores: state.sectores.concat(action.payload),
        loading: false,
      };
    case "CREATE_SECTOR_SUCCESS":
      return {
        ...state,
        sectores: [...state.sectores, action.payload],
        loading: false,
      };
    case "UPDATE_SECTOR_SUCCESS":
      return {
        ...state,
        sectores: state.sectores.map((sec) =>
          sec.id === action.payload.id ? action.payload : sec
        ),
        loading: false,
      };
    case "DELETE_SECTOR_SUCCESS":
      return {
        ...state,
        sectores: state.sectores.filter((sec) => sec.id !== action.payload),
        loading: false,
      };

    // === REPARACIONES ===
    case "GET_REPARACIONES_SUCCESS":
      return { ...state, reparaciones: action.payload, loading: false };
    case "GET_REPARACION_SUCCESS":
      return {
        ...state,
        reparaciones: state.reparaciones.concat(action.payload),
        loading: false,
      };
    case "CREATE_REPARACION_SUCCESS":
      return {
        ...state,
        reparaciones: [...state.reparaciones, action.payload],
        loading: false,
      };
    case "UPDATE_REPARACION_SUCCESS":
      return {
        ...state,
        reparaciones: state.reparaciones.map((rep) =>
          rep.id === action.payload.id ? action.payload : rep
        ),
        loading: false,
      };
    case "DELETE_REPARACION_SUCCESS":
      return {
        ...state,
        reparaciones: state.reparaciones.filter(
          (rep) => rep.id !== action.payload
        ),
        loading: false,
      };

    // === USUARIOS ASIGNADOS ===
    case "GET_USUARIOS_ASIGNADOS_SUCCESS":
      return { ...state, usuariosAsignados: action.payload, loading: false };
    case "GET_USUARIO_ASIGNADO_SUCCESS":
      return {
        ...state,
        usuariosAsignados: state.usuariosAsignados.concat(action.payload),
        loading: false,
      };
    case "CREATE_USUARIO_ASIGNADO_SUCCESS":
      return {
        ...state,
        usuariosAsignados: [...state.usuariosAsignados, action.payload],
        loading: false,
      };
    case "DELETE_USUARIO_ASIGNADO_SUCCESS":
      return {
        ...state,
        usuariosAsignados: state.usuariosAsignados.filter(
          (usr) => usr.id !== action.payload
        ),
        loading: false,
      };

    // === ERRORES ===
    case "GET_CATEGORIAS_FAIL":
    case "GET_CATEGORIA_FAIL":
    case "GET_CATEGORIA_DISPOSITIVO_ERROR":
    case "CREATE_CATEGORIA_FAIL":
    case "UPDATE_CATEGORIA_FAIL":
    case "DELETE_CATEGORIA_FAIL":
    case "GET_SECTORES_FAIL":
    case "GET_SECTOR_FAIL":
    case "CREATE_SECTOR_FAIL":
    case "UPDATE_SECTOR_FAIL":
    case "DELETE_SECTOR_FAIL":
    case "GET_REPARACIONES_FAIL":
    case "GET_REPARACION_FAIL":
    case "CREATE_REPARACION_FAIL":
    case "UPDATE_REPARACION_FAIL":
    case "DELETE_REPARACION_FAIL":
    case "GET_USUARIOS_ASIGNADOS_FAIL":
    case "CREATE_USUARIO_ASIGNADO_FAIL":
    case "DELETE_USUARIO_ASIGNADO_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
