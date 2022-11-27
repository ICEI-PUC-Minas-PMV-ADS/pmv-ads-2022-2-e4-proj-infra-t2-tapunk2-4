import API from './web_api';
import { BASE_URL, MsEquipe } from './url';

export const insertCadEquipe = async (param) => {
    return await API.post(`${BASE_URL}/cadastroequipe`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

/* export const insertCadEquipe = async (param) => {
    return await API.post(`${MsEquipe}/cadastroequipe`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
} */

