import React, { lazy, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import axios from 'axios';
import Phimbo from "../phimbo/phimbo";
import Carousel from '../../component/carousel/carousel';
import { Card } from 'antd';
import './listmovie.css'


import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Listmovie = () => {
    const [slides, setSlides] = useState([])
    const [phimbo, setPhimbo] = useState ([])

    useEffect(() => {
        async function fetchData() {
        
            await axios
                .get('https://ophim1.com/danh-sach/phim-moi-cap-nhat')
                .then(response => {
                    response.data.items.forEach((element) => {
                        axios.get('https://ophim1.com/phim/' + element.slug)
                            .then(res => {
                                setSlides(pre => [...pre, res.data.movie])
                            })
                    });
                })
        }
        fetchData()
        
    }, [])
    return (
        <>
      <Carousel/>
        <div className="phim" style={{background: '#000'}}>
            <div className='phimmoicapnhap'>
                <div>
                    <h2 className="title" 
                    style={{color: '#fff', height: '50px', lineHeight: '50px', margin: '0', paddingLeft: '20px'}}>
                        Phim mới cập nhập
                    </h2>
                </div>
                <div className='phimle-list'>
                <Swiper 
                  slidesPerView={6}
                  spaceBetween={30}
                  pagination={{
                    clickable: true
                  }}
                  breakpoints={{
                    0:{
                        slidesPerView: 2,
                      spaceBetween: 10
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 0
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 10
                    }
                  }}
                autoplay={{delay:5000}}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
            {
            slides.map((item, index) => (
                <SwiperSlide key={index} style={{background: '#000'}}>
                    <Link to={item.slug}>
                    <div className="list">
                        <img className="list-img" src={item.thumb_url} loading='lazy'/>
                    </div>
                    <div className="list-lang">
                        <p>{item.lang}</p>
                    </div>
                    <div className="list-info">
                      <p style={{color: '#fff'}}>
                        {item.name}
                      </p>
                    </div>
                    </Link>
                </SwiperSlide>
            ))
        }
                  
            </Swiper>
                </div>
            </div>
        </div>
          <Phimbo/>
        </>
    );
};

export default Listmovie;