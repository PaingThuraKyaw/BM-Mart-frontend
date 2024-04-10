import { Box, Title } from "@mantine/core";
import { useFetchAllQuery } from "../../../../store/server/product/query";

const size = 10;
const HeroBanner = () => {
  const { data } = useFetchAllQuery({
    page: 1,
    size,
  });

  console.log(data);
  

  return (
    <>
      {/* product ======= list */}
      <Box>
        <Title order={4}>Just For You</Title>
      </Box>
    </>
  );
};

export default HeroBanner;
