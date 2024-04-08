import { Carousel } from "@mantine/carousel";
import { carouselData } from "../../../../utils/dummy";
import {  Box, Grid, Image, NavLink } from "@mantine/core";
import classes from "./style/hero-banner.module.css";
import { userCategory } from "../../../../assets/user-category";
import { useMediaQuery } from "@mantine/hooks";

const HeroBanner = () => {
  const media = useMediaQuery("(max-width: 1000px)");
  return (
    <Grid gutter={{ base: 10, md: 10, lg: 50 }}>
      {/* ======= Category bar ======== */}
      <Grid.Col display={media ? "none" : ""} span={{ base: 12, md: 3 }}>
        <Box className={classes.categoryList}>
          {userCategory.map((user, idx) => (
            <NavLink
              classNames={{ root: classes.root }}
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

      {/* ======== Carousel Banner ======= */}
      <Grid.Col mih={180} span={{ base: 12, md: 9 }}>
        <Carousel
          controlsOffset={"md"}
          withIndicators
          h={{ base: 180, sm: 400, md : 400 , lg: 400, xl: 400 }}
          loop
          classNames={{ indicator: classes.indicator }}
        >
          {carouselData.map((caro, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={caro}
               h={{base : 180 , sm : 400 , md : 400 , lg : 400 , xl : 400}}
                style={{ objectFit: "cover", borderRadius: 20 }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>

      {/* ======= Category bar ======== */}
      <Grid.Col display={media ? "" : "none"} span={{ base: 12, md: 3 }}>
        <Box mt={{ base: 0, md: 50, lg: 100 }} className={classes.categoryList}>
          {userCategory.map((user, idx) => (
            <NavLink
              classNames={{ root: classes.root }}
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
  );
};

export default HeroBanner;
