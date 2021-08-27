import axios from "axios";

const baseURL =
  "https://pnwyb0a3p8.execute-api.ap-southeast-2.amazonaws.com/production";

const service = axios.create({
  baseURL,
  timeout: 5000,
});

export const get = async (url, data) => service.get(url, data);

export const post = async (url, data) => service.post(url, data);

export const put = async (url, data) => service.put(url, data);

export const del = async (url) => service.delete(url);
