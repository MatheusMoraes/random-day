import axios from 'axios';

export const API_SECRET = "d87e03cd5c1d4c7c997bd1132b64e5bb";

export const AxiosFilmURL = axios.create({
  baseURL: "https://k2maan-moviehut.herokuapp.com/api/random",
  headers: {"X-Api-Key":API_SECRET} 	

})

export const AxiosFoodURL = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/random.php"
})

export const AxiosLocal = axios.create({
  baseURL: "https://localhost:44397/api/Activities/random",
  headers: { 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  }
})
