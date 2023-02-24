import React from "react";
import "./Game.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import game from "../Gamedata";
import SingleGame from "./SingleGame";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useState } from "react";

const Game = () => {
  const items = [...game];
 


  const [selected, setSelected] = useState(items[0]);

 

  return (
    <div className="main">
      <div className="game-container">
        <article className="grid">
          <div className="img-container"></div>
        </article>

        <div className="grid desp">
          <div  className='desp-image' >
            <img src={selected.image} alt={selected.title}/>
          </div>

          <div className='cart-button'>
              <button className="buy">Buy now</button> 
              <button className="add">Add To Cart</button>
          </div>

          <div className="price">
            <p>{selected.price}</p>
          </div>

          <div className="device">
              <button>XBOX</button>
              <button>PC</button>
              <button>PS5</button>
          </div>

          <div className='description'>
              <p>{selected.desp}</p>
          </div>
        </div>

        <article className="grid slider">
          <h1 className="slider-header">
            Trending Now <i class="fa-solid fa-arrow-right-long"></i>
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.map((item, key) => {
              const { id, title, image } = item;
              return (
                <SwiperSlide key={id}>
                  <div className="slider-content">
                    <div className="slider-img">
                      <img
                        src={image}
                        alt={title}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelected(item);
                        }}
                      />
                    </div>
                    <button className="detail">
                      View details<i class="fa-solid fa-circle-arrow-right"></i>
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
      </div>
    </div>
  );
};

export default Game;
