import React from "react";
import styles from "./MainSlider.module.css";
import Slider from "react-slick";
import imgMain from "../../Assets/Imgs/markus-spiske-5UJbKYUjFCk-unsplash.jpg";
import imgMain2 from "../../Assets/Imgs/person-flying-with-shopping-bags.jpg";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <>
      <div className=" container my-5">
        <Slider {...settings }>
          <div className="  d-flex justify-content-center ">
            <img src={imgMain} alt="" className={styles.imgwidth} />
          </div>
          <div className="  d-flex justify-content-center ">
            <img src={imgMain2} alt="" className={styles.imgwidth}/>
          </div>
        </Slider>
      </div>
    </>
  );
}
