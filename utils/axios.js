import axios from "axios";

axios.defaults.baseURL = "";

export const get = async (url, data) => axios.get(url, data);

export const post = async (url, data) => axios.post(url, data);

export const put = async (url, data) => axios.put(url, data);

export const del = async (url) => axios.delete(url);
