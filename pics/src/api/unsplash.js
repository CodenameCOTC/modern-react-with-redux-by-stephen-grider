import axios from "axios";

const ACCESS_KEY =
  "5d76c4c38552c0e4033bd4d90aac7de7699836d7dc39c5fdb2beb7ae266f6647";
const BASE_URL = "https://api.unsplash.com/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});
