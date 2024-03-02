import React from "react";
import styles from "./CategorySlider.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function getCategoriesSlider() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  let { data } = useQuery("CategorySlider", getCategoriesSlider);

  return (
    <>
      <div className=" container">
        <h1 className="my-3">Featured Categories</h1>
        <Slider {...settings}>
          {data?.data?.data?.map((category) => (
            <div key={category._id} className="pe-3">
              <div className="border rounded  p-2  ">
                <img
                  src={category.image}
                  className={`${styles.imgstyle} p-1 `}
                />
                <p className="d-flex justify-content-center align-items-center">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
