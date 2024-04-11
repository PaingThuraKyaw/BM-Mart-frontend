/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Rating,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useFetchAllQuery } from "../../../../store/server/product/query";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isPending,
  } = useFetchAllQuery();

  return (
    <>
      {/* product ======= list */}
      <Box>
        <Title mb={10} order={4}>
          Just For You
        </Title>

        <Box>
          {data?.pages.map((data, indx) => (
            <div key={indx}>
              <Grid gutter={20}>
                { isFetching || isPending ? (
                  <>
                    {[...new Array(12)].map((_, idx) => (
                      <Grid.Col key={idx} span={2}>
                        <Card shadow="sm" px={4} radius="md" withBorder>
                          <Card.Section>
                            <Skeleton h={200} />
                          </Card.Section>
                          <Skeleton width={100} height={8} mt={5} />
                          <Flex mt={8} justify={"space-between"}>
                            <Skeleton height={20} width={50} />
                            <Skeleton height={20} width={50} />
                          </Flex>
                        </Card>
                      </Grid.Col>
                    ))}
                  </>
                ) : (
                  <>
                    {data.data.map((product) => (
                      <Grid.Col
                        span={{ base: 6, sm: 4, lg: 2 }}
                        key={product.id}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`detail/${product.id}`}
                        >
                          <Card
                            h={300}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                          >
                            <Card.Section>
                              <Image
                                src={product.image[0]}
                                height={200}
                                alt="product"
                              />
                            </Card.Section>
                            <Title mt={10} order={6}>
                              {product.title}
                            </Title>
                            <Group justify="space-between" mt={8}>
                              <Text size="sm" c="dimmed">
                                {product.price} ks
                              </Text>
                              <Badge color="pink">on sale</Badge>
                            </Group>
                            {product.rating !== 0 &&
                              product.rating !== null && (
                                <Rating
                                  mt={10}
                                  size={12}
                                  defaultValue={product.rating || 0}
                                  readOnly
                                />
                              )}
                          </Card>
                        </Link>
                      </Grid.Col>
                    ))}
                  </>
                )}
              </Grid>
            </div>
          ))}
        </Box>

        <Flex justify={"center"} py={40}>
          {!hasNextPage ? (
            <Text
              bg={"var(--bm-yellow-3)"}
              fw={"bold"}
              py={8}
              style={{ borderRadius: "var(--mantine-radius-md)" }}
              px={16}
              c={"var(--bm-yellow-light)"}
            >
              Reach the end of the product
            </Text>
          ) : (
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              click
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default HeroBanner;
