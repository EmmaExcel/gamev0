import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import movies from "../moviesdata";
import "./Movies.css";

const Movies = () => {
  const items = [...movies];

  const [selectedId, setSelectedId] = useState(items[0]);

  return (
    <div className="main">
      <div className="movie-container">
        <article className="grid">
          <div className="movie-img-container"></div>
        </article>

        <article className="grid desp">
          <div className="movie-desp-image">
            <img src={selectedId.Poster} alt={selectedId.Title} />
          </div>

          <div className="movie-title">
            <h2>{selectedId.Title}</h2>

            <div className="year">
              <h4>{selectedId.Year}</h4>
            </div>
          </div>

          <div className="cart-button">
            <button className="buy">Buy now</button>
            <button className="add">Add To Cart</button>
          </div>

          <div className="movie-description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ea tempore deserunt excepturi eos ex, impedit veritatis error
              soluta dolore, quidem voluptas ipsa est mollitia quasi, adipisci
              facilis temporibus consectetur esse ullam iste. Laudantium,
              dolores officia quasi nihil, recusandae possimus eligendi nemo,
              totam voluptatem omnis molestias earum ducimus? Neque dolorum id
              delectus eaque obcaecati ipsam. Unde labore placeat excepturi ad.
            </p>
          </div>
        </article>

        <article className="grid slider">
          <h1 className="slider-header">
            Trending Now <i class="fa-solid fa-arrow-right-long"></i>
          </h1>
          <Swiper
            spaceBetween={40}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.map((item, key) => {
              const { id, Title, Poster } = item;
              return (
                <SwiperSlide key={id}>
                  <div className="slider-content">
                    <div
                      className="slider-img"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedId(item);
                      }}
                    >
                      <img src={Poster} alt={Title} />
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

export default Movies;
