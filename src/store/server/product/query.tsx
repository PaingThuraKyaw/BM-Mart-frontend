import { useInfiniteQuery } from "@tanstack/react-query";
import { axios } from "../../../api";
import { getParams } from "../../../utils/getParams";
import { productDataSchema } from "./schema";

const fetchAllProduct = async (payload: { page: number }) => {
  const params = getParams(payload);
  const { data } = await axios.get(`product?${params}`, {
    headers: {
      Application: "application/json",
    },
  });
  return productDataSchema.parse(data);
};

export const useFetchAllQuery = () => {
  return useInfiniteQuery({
    queryKey: ["all-products"],
    queryFn: ({ pageParam }) => fetchAllProduct({ page: pageParam }),
    getNextPageParam: (data, pages) => {
      return data.data.length !== 0 ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
