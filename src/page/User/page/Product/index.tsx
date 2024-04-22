/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import { useFetchAllQuery } from "../../../../store/server/product/query";
import { Link } from "react-router-dom";
import classess from "./style/product.module.css";
import React, { useEffect, useRef } from "react";
import { useIntersection, useMediaQuery } from "@mantine/hooks";

const HeroBanner = () => {
  // media query
  const matches = useMediaQuery("(max-width: 1000px)");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: scrollRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFetchAllQuery();

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  if (isLoading) {
    return <h3>Hello</h3>;
  }

  // const post = data?.pages.flatMap((item) => item.data.flatMap((i) => i));

  return (
    <Container size={"lg"}>
      {/* product ======= list */}
      <Box pb={90}>
        <Title mb={10} order={3}>
          Just For You
        </Title>

        {/* Desktop view */}
        <Box className={classess.media}>
          <Grid columns={matches ? 4 : 5}>
            {data?.pages.map((data, indx) => (
              <React.Fragment key={indx}>
                {data.data.map((product) => (
                  <Grid.Col ref={ref} key={product.id} span={1}>
                    <Link
                      key={product.id}
                      style={{ textDecoration: "none" }}
                      to={`detail/${product.id}`}
                    >
                      <Card
                        className={classess.hoverCard}
                        h={300}
                        shadow="sm"
                        // padding="lg"
                        p={{
                          base: "sm",
                          sm: "sm",
                          md: "lg",
                          lg: "md",
                          xl: "md",
                        }}
                        radius="md"
                        withBorder
                      >
                        <Card.Section>
                          <Image
                            src={product.image[0]}
                            height={200}
                            width={200}
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
                        {/* Rating system */}
                        {product.rating !== 0 && product.rating !== null && (
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
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        {/* Mobile view */}
        <Box className={classess.mediaSm}>
          <Grid columns={1}>
            {data?.pages.map((data, indx) => (
              <React.Fragment key={indx}>
                {data.data.map((product) => (
                  <Grid.Col
                    key={product.id}
                    span={1}
                  >
                    <Link
                      key={product.id}
                      style={{ textDecoration: "none" }}
                      to={`detail/${product.id}`}
                    >
                      <Card
                        className={classess.hoverCard}
                        h={300}
                        shadow="sm"
                        // padding="lg"
                        p={{
                          base: "sm",
                          sm: "sm",
                          md: "lg",
                          lg: "md",
                          xl: "md",
                        }}
                        radius="md"
                        withBorder
                      >
                        <Card.Section>
                          <Image
                            src={product.image[0]}
                            height={200}
                            width={200}
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
                        {/* Rating system */}
                        {product.rating !== 0 && product.rating !== null && (
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
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        <Flex justify={"center"} py={{ base: 25, sm: 25, md: 40, lg: 40 }}>
          {!hasNextPage ? (
            <Text
              bg={"var(--bm-yellow-3)"}
              fw={"bold"}
              py={8}
              style={{ borderRadius: "var(--mantine-radius-md)", fontSize: 14 }}
              px={16}
              c={"var(--bm-yellow-light)"}
            >
              Reach the end of the product
            </Text>
          ) : (
            <Button
              variant={"light"}
              color="var(--bm-yellow)"
              onClick={() => fetchNextPage()}
              loading={!hasNextPage || isFetchingNextPage}
            >
              more product
            </Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default HeroBanner;
