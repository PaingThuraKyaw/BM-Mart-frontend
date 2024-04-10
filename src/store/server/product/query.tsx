import { useInfiniteQuery } from "@tanstack/react-query";
import { axios } from "../../../api";
import { ApiParamResponse } from "../../../utils/typed";
import { getParams } from "../../../utils/getParams";

const fetchAllProduct = async (payload: ApiParamResponse) => {
  const params = getParams(payload);
  const { data } = await axios.get(`product?${params}`, {
    headers: {
      Application: "application/json",
    },
  });
  return data;
};

export const useFetchAllQuery = (paylpad: ApiParamResponse) => {
  return useInfiniteQuery({
    queryKey: ["all-products"],
    queryFn: () => fetchAllProduct(paylpad),
    getNextPageParam: (lastPage) => lastPage.nextPage, // Assuming your API response contains a 'nextPage' field indicating the next page number
    initialPageParam: 1, // Providing initialPageParam here
  });
};
