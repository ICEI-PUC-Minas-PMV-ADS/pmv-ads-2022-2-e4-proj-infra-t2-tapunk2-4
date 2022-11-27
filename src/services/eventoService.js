import API from './web_api';
import { BASE_URL, MsEvento } from './url';

export const insertCadEvento = async (param) => {
    return await API.post(`${BASE_URL}/cadastroevento`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}
//microservico
/* export const insertCadEvento= async (param) => {
    return await API.post(`${MsEvento}/cadastroevento`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
} */

export const getCadEvento = async (param) => {
    return await API.get(`${BASE_URL}/cadastroevento`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}
//microserviço
/* export const getCadEvento = async (param) => {
    return await API.get(`${MsEvento}/cadastroevento`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
} */
