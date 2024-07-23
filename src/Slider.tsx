import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Slider.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img className='postcard' src="https://magazineit.secretescapes.com/wp-content/uploads/2021/02/bb596-banner-tropical-paradise-beach-background-690506986-1140x641-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://www.focus.it/images/2021/11/23/mare_1020x680.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://www.metropolitano.it/wp-content/uploads/2023/06/Cala-Goloritze-a-Baunei-Sardegna-@Valerio-Mei.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://s3.eu-central-1.amazonaws.com/pazienti-platform/media_items/files/000/000/844/large/Perch_C3_A9-il-mare-fa-bene-alla-salute-1024x680.jpg?1578570267" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://media.paginemediche.it/benessere/sport-e-tempo-libero/sport-al-mare-e-in-vacanza-come-mantenersi-in-forma-anche-d-estate/sport-al-mare-e-in-vacanza-come-mantenersi-in-forma-anche-d-estate-1200-900.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://ilbolive.unipd.it/sites/default/files/2018-06/oceano-world-ocean-day-unipd-evento.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://www.outdoorportofino.com/wp-content/uploads/2020/12/Tramonto_sea-kayak.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.29892710.7055475/1726713.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='postcard' src="https://live.staticflickr.com/7273/7009228091_2927e0f489_z.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
