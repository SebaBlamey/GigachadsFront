import React from "react";
import Carousel from "nuka-carousel";
import image01 from "../assets/carousel/01.jpg";
import image02 from "../assets/carousel/02.jpg";
import image03 from "../assets/carousel/03.jpg";
import image04 from "../assets/carousel/04.jpg";
import image05 from "../assets/carousel/05.jpg";
import './carrousel.css';
import { renderCenterLeftControls, renderCenterRightControls } from "../components/buttons";

const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        dragging={true}
        wrapAround={true}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
      >
        <div className="image-container">
          <img src={image01} className="carrousel-images" alt="Imagen 1" />
          <div className="image-text">Texto de la imagen 1</div>
        </div>
        <div className="image-container">
          <img src={image02} className="carrousel-images" alt="Imagen 2" />
          <div className="image-text">Texto de la imagen 2</div>
        </div>
        <div className="image-container">
          <img src={image03} className="carrousel-images" alt="Imagen 3" />
          <div className="image-text">Texto de la imagen 3</div>
        </div>

        <div className="image-container">
          <img src={image05} className="carrousel-images" alt="Imagen 5" />
          <div className="image-text">Texto de la imagen 5</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carrousel;
