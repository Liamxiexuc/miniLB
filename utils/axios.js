import axios from "axios";

axios.defaults.baseURL =
  "https://pnwyb0a3p8.execute-api.ap-southeast-2.amazonaws.com/production";

export const get = async (url, data) => axios.get(url, data);

export const post = async (url, data) => axios.post(url, data);

export const put = async (url, data) => axios.put(url, data);

export const del = async (url) => axios.delete(url);
