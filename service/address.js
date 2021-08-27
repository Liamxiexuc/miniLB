import { get } from "../utils/axios";

export const requestAddress = (payload) => {
  const url = "/addresses";
  const data = {
    params: payload,
  };
  return get(url, data).then((response) => response.data);
};
