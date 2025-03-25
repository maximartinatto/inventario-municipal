const initialState = {
  dispositivos: [],
  categorias: [],
  sectores: [],
  reparaciones: [],
  usuariosAsignados: [],
  loading: false,
  error: null,
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    // === DISPOSITIVOS ===
    case "FETCH_DISPOSITIVOS_REQUEST":
    case "FETCH_DISPOSITIVO_REQUEST":
    case "CREATE_DISPOSITIVO_REQUEST":
    case "UPDATE_DISPOSITIVO_REQUEST":
    case "DELETE_DISPOSITIVO_REQUEST":
    case "FETCH_DISPOSITIVOS_BY_SECTOR_REQUEST":
    case "FETCH_DISPOSITIVOS_BY_USUARIO_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_DISPOSITIVOS_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };
    case "FETCH_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: state.dispositivos.concat(action.payload),
        loading: false,
      };
    case "CREATE_DISPOSITIVO_SUCCESS":
      return {
        ...state,
        dispositivos: [...state.dispositivos, action.payload],
        loading: false,
      };
    case "UPDATE_DISPOSITIVO_SUCCESS":
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
    case "FETCH_DISPOSITIVOS_BY_SECTOR_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };
    case "FETCH_DISPOSITIVOS_BY_USUARIO_SUCCESS":
      return { ...state, dispositivos: action.payload, loading: false };

    // === ERRORES ===
    case "FETCH_DISPOSITIVOS_FAIL":
    case "FETCH_DISPOSITIVO_FAIL":
    case "CREATE_DISPOSITIVO_FAIL":
    case "UPDATE_DISPOSITIVO_FAIL":
    case "DELETE_DISPOSITIVO_FAIL":
    case "FETCH_DISPOSITIVOS_BY_SECTOR_FAIL":
    case "FETCH_DISPOSITIVOS_BY_USUARIO_FAIL":
      return { ...state, loading: false, error: action.payload };

    // === CATEGORÍAS ===
    case "FETCH_CATEGORIAS_REQUEST":
    case "FETCH_CATEGORIA_REQUEST":
    case "CREATE_CATEGORIA_REQUEST":
    case "UPDATE_CATEGORIA_REQUEST":
    case "DELETE_CATEGORIA_REQUEST":
    case "FETCH_SECTORES_REQUEST":
    case "FETCH_SECTOR_REQUEST":
    case "CREATE_SECTOR_REQUEST":
    case "UPDATE_SECTOR_REQUEST":
    case "DELETE_SECTOR_REQUEST":
    case "FETCH_REPARACIONES_REQUEST":
    case "FETCH_REPARACION_REQUEST":
    case "CREATE_REPARACION_REQUEST":
    case "UPDATE_REPARACION_REQUEST":
    case "DELETE_REPARACION_REQUEST":
    case "FETCH_USUARIOS_ASIGNADOS_REQUEST":
    case "CREATE_USUARIO_ASIGNADO_REQUEST":
    case "DELETE_USUARIO_ASIGNADO_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_CATEGORIAS_SUCCESS":
      return { ...state, categorias: action.payload, loading: false };
    case "FETCH_CATEGORIA_SUCCESS":
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

    // === SECTORES ===
    case "FETCH_SECTORES_SUCCESS":
      return { ...state, sectores: action.payload, loading: false };
    case "FETCH_SECTOR_SUCCESS":
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
    case "FETCH_REPARACIONES_SUCCESS":
      return { ...state, reparaciones: action.payload, loading: false };
    case "FETCH_REPARACION_SUCCESS":
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
    case "FETCH_USUARIOS_ASIGNADOS_SUCCESS":
      return { ...state, usuariosAsignados: action.payload, loading: false };
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
    case "FETCH_CATEGORIAS_FAIL":
    case "FETCH_CATEGORIA_FAIL":
    case "CREATE_CATEGORIA_FAIL":
    case "UPDATE_CATEGORIA_FAIL":
    case "DELETE_CATEGORIA_FAIL":
    case "FETCH_SECTORES_FAIL":
    case "FETCH_SECTOR_FAIL":
    case "CREATE_SECTOR_FAIL":
    case "UPDATE_SECTOR_FAIL":
    case "DELETE_SECTOR_FAIL":
    case "FETCH_REPARACIONES_FAIL":
    case "FETCH_REPARACION_FAIL":
    case "CREATE_REPARACION_FAIL":
    case "UPDATE_REPARACION_FAIL":
    case "DELETE_REPARACION_FAIL":
    case "FETCH_USUARIOS_ASIGNADOS_FAIL":
    case "CREATE_USUARIO_ASIGNADO_FAIL":
    case "DELETE_USUARIO_ASIGNADO_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
