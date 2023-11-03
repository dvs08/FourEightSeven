import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/spiced_blend_1.webp";
import img2 from "../../assets/spiced_blend_2.webp";
import img3 from "../../assets/spiced_blend_3.webp";

const index = () => {
  return (
    <div className="">
      <div className="flex justify-center align-center">
        <Carousel className="justify-center border border-black rounded-full w-60 h-100" showThumbs={false} showArrows={false} showStatus={false}>
          <img src={img1} className="px-12 py-6 w-60 h-100" />
          <img src={img2} className="px-12 py-6 w-60 h-100" />
          <img src={img3} className="px-12 py-6 w-60 h-100" />
        </Carousel>
      </div>
    </div>
  );
}

export default index;
