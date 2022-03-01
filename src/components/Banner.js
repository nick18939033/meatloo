import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/img-1.jpg";
import Image2 from "../assets/img-2.jpg";
import Image3 from "../assets/img-3.jpg";

const Banner = () => {
  return (
    <>
    
      <Carousel showStatus={false} showThumbs={false}  infiniteLoop autoPlay interval={3000}  >
        <div>
          <img src={Image1} />
        </div>
        <div>
          <img src={Image2} />
        </div>
        <div>
          <img src={Image3} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
