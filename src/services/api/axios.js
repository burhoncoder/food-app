import axios from "axios";

export const request = axios.create({
  method: "get",
  baseURL: "https://burhoncoder.github.io/food-app-api/",
  headers: { "X-Custom-Header": "Burxon food app" },
});
