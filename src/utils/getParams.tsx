import { ApiParamResponse } from "./typed";

export const getParams = ({ page, size = 10, category }: ApiParamResponse) => {
  let query = `page=${page}`;
  query += size && `&size=${size}`;
  query += category ?  `&category=${category}` : '';
  return query;
};
