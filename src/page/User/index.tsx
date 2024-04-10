import { Box, Container, Grid, Image, NavLink } from "@mantine/core";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import UserNavbar from "./components/nav-bar";
import { userCategory } from "../../assets/user-category";
import classes from "./style/index.module.css";
import { carouselData } from "../../utils/dummy";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const User = () => {
  const media = useMediaQuery("(max-width: 1000px)");

  const { pathname } = useLocation();

  return (
    <>
      <UserNavbar />
      <Container mt={20} size={"xl"}>
        {/* =========== Banner ============= */}
        <Grid align="center" gutter={{ base: 10, md: 10, lg: 50 }}>
          {/* ======= Category bar ======== */}
          <Grid.Col display={media ? "none" : ""} span={{ base: 12, md: 3 }}>
            <Box h={400} className={classes.categoryList}>
              {userCategory.map((user, idx) => {
                console.log(pathname === user.link);

                return (
                  <NavLink
                    classNames={{
                      root:
                        pathname.toString() === user.link.toString()
                          ? classes.active
                          : classes.root,
                    }}
                    display={"inline-block"}
                    className={
                      user.title.length > 10
                        ? classes.navLink
                        : classes.navLink50
                    }
                    variant="light"
                    key={idx}
                    href={user.link}
                    label={<Box component="p">{user.title}</Box>}
                  />
                );
              })}
            </Box>
          </Grid.Col>

          {/* ======== Carousel Banner ======= */}
          <Grid.Col mih={180} span={{ base: 12, md: 9 }}>
            <Carousel
              controlsOffset={"md"}
              withIndicators
              h={{ base: 180, sm: 400, md: 400, lg: 400, xl: 400 }}
              loop
              classNames={{ indicator: classes.indicator }}
            >
              {carouselData.map((caro, index) => (
                <Carousel.Slide key={index}>
                  <Image
                    src={caro}
                    h={{ base: 180, sm: 400, md: 400, lg: 400, xl: 400 }}
                    style={{ objectFit: "cover", borderRadius: 10 }}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>

          {/* ======= Category bar ======== */}
          <Grid.Col display={media ? "" : "none"} span={{ base: 12, md: 3 }}>
            <Box
              mt={{ base: 0, md: 50, lg: 100 }}
              className={classes.categoryList}
            >
              {userCategory.map((user, idx) => (
                <NavLink
                  classNames={{
                    root:
                      pathname.toString() === user.link.toString()
                        ? classes.active
                        : classes.root,
                  }}
                  display={"inline-block"}
                  className={
                    user.title.length > 10 ? classes.navLink : classes.navLink50
                  }
                  variant="light"
                  key={idx}
                  href={user.link}
                  label={<Box component="p">{user.title}</Box>}
                />
              ))}
            </Box>
          </Grid.Col>
        </Grid>
        <Box mt={30}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </>
  );
};

export default User;
