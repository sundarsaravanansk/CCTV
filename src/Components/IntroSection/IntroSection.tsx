"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import "./intro.css"
import Image from 'next/image';
import Navbar from '@/Navbar/Navbar';

const IntroSection = () => {
    return (
        <>
        <div className='h-screen relative'>
            <Navbar/>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
              
                
                autoplay={{
                    delay : 2200
                }}
                modules={[EffectFade, Navigation , Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                   <Image
                   src={"/intro/img-1.jpg"}
                   alt='img-1'
                   width={1500}
                   height={1500}
                   priority
                   className='object-cover h-screen lg:h-auto'
                   />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                   <Image
                   src={"/intro/img-2.jpg"}
                   alt='img-1'
                   width={1500}
                   height={1500}
                   priority
                   className='object-cover h-screen lg:h-auto'
                   />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                   <Image
                   src={"/intro/img-3.jpg"}
                   alt='img-1'
                   width={1500}
                   height={1500}
                   priority
                   className='object-cover h-screen lg:h-auto'
                   />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                   <Image
                   src={"/intro/img-4.jpg"}
                   alt='img-1'
                   width={1500}
                   height={1500}
                   priority
                   className='object-cover h-screen lg:h-auto'
                   />
                   </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    );
}

export default IntroSection;
