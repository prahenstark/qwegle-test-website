import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero2.scss";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
//Assets
import HeroImage from '../../assets/hero/qwegle image.jpg';
// import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from '../ui-components/button/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectCards, Autoplay } from 'swiper/modules';

const hero2 = () => (
  <div className="hero2" id="hero2">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
        <Swiper 
          className="swiper1"
            modules={[Pagination, Autoplay, EffectCards]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{delay: 3000}}
            effect="cards"
            
            >

            <SwiperSlide className="swiper1-slider">
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
            <SwiperSlide >
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
            <SwiperSlide >
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
            <SwiperSlide >
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
            <SwiperSlide >
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
            <SwiperSlide >
              <img className="hero-image" src={HeroImage} alt="hero" />
            </SwiperSlide>
          </Swiper>
        </Col>

        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Direct </h1>
            <h1 className="weight800 font60">
              From Tap Policy
            </h1>
            <p className="font12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Button label="LEARN MORE" target={"contact"} />
          </div>
        </Col>
        
      </Row>
    </div>
  </div>
);

export default hero2;
