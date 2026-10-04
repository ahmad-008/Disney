import axios from "axios"



const movieBaseUrl= "https://api.themoviedb.org/3"
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const api_key="8d35c55ea8d53336e4d8e51ecce3668e"

//https://api.themoviedb.org/3/trndeing/all/day?api_key=8d35c55ea8d53336e4d8e51ecce3668e

const getTrendingVideos= axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

export default {
    getTrendingVideos
}