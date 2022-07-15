import axios from "axios";

const API_KEY = "d0f5f2e135336200362af8a1a73acb17";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: API_KEY },
});

export { api };
