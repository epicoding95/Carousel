import React, { useState, useRef, useLayoutEffect } from "react";
import classes from "./Carousel.module.css";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
const Carousel = () => {
  const [pictureIndex, setPictureIndex] = useState(0);
  const imageToShow = [image1, image2, image3];
  const leftButton = useRef(null);
  const rightButton = useRef(null);

  useLayoutEffect(() => {
    console.log(pictureIndex);
    if (pictureIndex == 0) {
      leftButton.current.style.display = "none";
    } else {
      leftButton.current.style.display = "block";
    }
    if (pictureIndex == 2) {
      rightButton.current.style.display = "none";
    } else {
      rightButton.current.style.display = "block";
    }
  }, [pictureIndex]);
  const handlePictureDown = () => {
    setPictureIndex(latest => latest - 1);
  };
  const handlePictureUp = () => {
    setPictureIndex(latest => latest + 1);
  };

  return (
    <div className={classes.Container}>
      <button
        ref={leftButton}
        onClick={handlePictureDown}
        className={classes.ButtonLeft}
      >
        left arrow
      </button>
      <div className={classes.CarouselContainer}>
        <ul className={classes.CarouselList}>
          <li className={classes.CarouselItem}>
            <img alt="image1" src={imageToShow[pictureIndex]} />
          </li>
        </ul>
      </div>
      <button
        ref={rightButton}
        onClick={handlePictureUp}
        className={classes.ButtonRight}
      >
        right next
      </button>
      <div className={classes.CarouselNav}>
        <button
          className={pictureIndex === 0 ? classes.Active : classes.InActive}
          onClick={() => setPictureIndex(0)}
        ></button>
        <button
          className={pictureIndex === 1 ? classes.Active : classes.InActive}
          onClick={() => setPictureIndex(1)}
        ></button>
        <button
          className={pictureIndex === 2 ? classes.Active : classes.InActive}
          onClick={() => setPictureIndex(2)}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
