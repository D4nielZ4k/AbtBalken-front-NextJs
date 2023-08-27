"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../SimpleSlider/SimpleSlider.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import slide1 from "../../assets/front.jpg";
import slide2 from "../../assets/front2.jpg";
import slide3 from "../../assets/front3.jpg";
import slide4 from "../../assets/front4.jpg";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className={style.slider}>
          {" "}
          <Image
            style={{ width: "100%", height: "auto" }}
            src={slide1}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div>
        <div className={style.slider}>
          {" "}
          <Image
            style={{ width: "100%", height: "auto" }}
            src={slide2}
            alt="Picture of the author"
          />
        </div>
      </div>{" "}
      <div>
        <div className={style.slider}>
          {" "}
          <Image
            style={{ width: "100%", height: "auto" }}
            src={slide3}
            alt="Picture of the author"
          />
        </div>{" "}
      </div>
      <div>
        <div className={style.slider}>
          {" "}
          <Image
            style={{ width: "100%", height: "auto" }}
            src={slide4}
            alt="Picture of the author"
          />
        </div>
      </div>
    </Slider>
  );
}
