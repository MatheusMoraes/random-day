import axios from 'axios';

export const API_SECRET = "d87e03cd5c1d4c7c997bd1132b64e5bb";

export const AxiosFilmURL = axios.create({
  baseURL: "https://k2maan-moviehut.herokuapp.com/api/random",
  headers: {"X-Api-Key":API_SECRET} 	

})

export const AxiosPlaceURL = axios.create({
  baseURL: "https://randommer.io/api/random-movies"
})

export const AxiosFoodURL = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/random.php"
})
