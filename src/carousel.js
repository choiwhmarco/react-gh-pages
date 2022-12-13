import React, { useState } from "react";
import "./carousel.css";
import { images } from "./CarouselData.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import chord from './chord.png';
import { Box } from "@mui/system";


function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  

  return (
    <div className="carousel" sx={{mt:4}}>
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div>
          <h2>{images[currImg].title}</h2>
          <Box
        component="img"
        sx={{
          height: 320,
          width: 400,
          maxHeight: { xs: 350, md: 340 },
          maxWidth: { xs: 500, md: 650 },
        }}
        alt="The house from the offer."
        src={chord}
      />
        </div>
        <div className="center">
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;