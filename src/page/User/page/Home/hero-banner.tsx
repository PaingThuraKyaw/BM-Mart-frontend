import { Carousel } from "@mantine/carousel";
import { carouselData } from "../../../../utils/dummy";
import { Image } from "@mantine/core";

const HeroBanner = () => {
  return (
    <>
      <Carousel
        controlsOffset={"md"}
        w={"100%"}
        withIndicators
        height={600}
        loop
      >
        {carouselData.map((caro, index) => (
          <Carousel.Slide   key={index}>
            <Image src={caro} height={600} style={{ objectFit: "cover" , borderRadius : 20 }} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default HeroBanner;
