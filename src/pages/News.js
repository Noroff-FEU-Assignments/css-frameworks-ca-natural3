import React from "react";
import Paginations from "../components/Paginations";
import NewsCards from "../components/NewsCards";

import imgNews1 from "../assets/news/news-1.jpg";
import imgNews2 from "../assets/news/news-2.jpg";
import imgNews3 from "../assets/news/news-3.jpg";
import imgNews4 from "../assets/news/news-4.jpg";
import imgNews5 from "../assets/news/news-5.jpg";
import imgNews6 from "../assets/news/news-6.jpg";
import imgNews7 from "../assets/news/news-7.jpg";
import imgNews8 from "../assets/news/news-8.jpg";

const images = [imgNews1, imgNews2, imgNews3, imgNews4, imgNews5, imgNews6, imgNews7, imgNews8];

function News() {
  return (
    <div className="container">
      <h1>News</h1>
      <Paginations />
      <div className="cardList">
        {images.map((item, index) => (
          <NewsCards
            key={`newscard_${index}`}
            image={item}
            title="Nunc porttitor vel"
            text="Nunc malesuada eget est fringilla dapibus."
          />
        ))}
      </div>
      <Paginations />
    </div>
  );
}

export default News;
