import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation, Autoplay} from "swiper";
import axios from "axios";

export default function Carousel() {
    const [slides, setSlides] = useState([])

    useEffect(() => {
        async function fetchData() {
        
            await axios
                .get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=2')
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
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" style={{height: '575px'}} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        {
            slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.poster_url}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
