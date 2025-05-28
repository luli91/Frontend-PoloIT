export const API_CONFIG = {
    BASE_URL: 'https://backend-poloit-testing.up.railway.app',
    ENDPOINTS: {
    AUTH: {
            LOGIN: '/usuarios/login',
            REGISTER: '/usuarios/registro',
            PROFILE: '/usuarios/me',
        },
        USERS: {
            UPDATE: '/usuarios/actualizar',
            DELETE: '/usuarios/eliminar',
        },
    DONACIONES: {
        BASE: '/donaciones',
        ONE: (id) => `/donaciones/${id}`,
        EDIT: (id) => `/donaciones/${id}`,
        DELETE: (id) => `/donaciones/${id}`,
    },
    PUBLICACIONES: {
        BASE: '/publicaciones',
        ONE: (id) => `/publicaciones/${id}`,
    },
    },
};
