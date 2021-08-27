import { get } from "../utils/axios";

export const requestProperty = (id) => {
  const url = `/legacybuilder/propertydata/${id}`;

  return get(url).then((response) => response.data);
};
