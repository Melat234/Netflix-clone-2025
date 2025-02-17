// 6fb11604dd311380ce3c021b4e6eab8d
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;


