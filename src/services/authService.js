import API from './web_api';
import { BASE_URL, MsUsuario} from './url';


//registro do usuario local
export const register = async (param) => {

  try{
    return await API.post(`${BASE_URL}/register`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

//registro do usuario integrado com os microserviços
/* export const register = async (param) => {

  try{
    return await API.post(`${MsUsuario}/usuario`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
} */

export const login = async (param) => {

    return await API.post(`${BASE_URL}/login`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

/* export const login = async (param) => {

    return await API.post(`${MsUsuario}/login`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
} */