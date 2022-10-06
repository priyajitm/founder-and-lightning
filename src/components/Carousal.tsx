import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import { CarousalProps } from "../types";

const Carousal = ({data, handleCardClick}: CarousalProps) => {
  
  var settings = {
    class:'ss',
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carousal">
        <h2> My Albums </h2>
        <Slider {...settings}>
        {Object.values(data).map((item) => (
        <Card
        key={item.id}
          cardName={item.title}
          cardId={item.id}
          handleCardClick={handleCardClick}
          type='album'
        />
      ))}
        </Slider>
      </div>
  )
}

export default Carousal