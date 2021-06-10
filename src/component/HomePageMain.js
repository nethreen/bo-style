import React from 'react';
import MainImg from '../img/bandana11.jpeg';
import './HomePageMainStyle.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import NewCollectionCard from './NewCollectionCard';

const HomePageMain = () => {
    return (
        <div className="homepage-main">
            <div className="homepage-main-left">
                <div className="homepage-main-left-content">
                    <h4>
                        New nature <br/> collection
                    </h4>
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={2.4}>
                        <SwiperSlide>
                            <NewCollectionCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCollectionCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCollectionCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <img src={MainImg} className="main-leftimg" alt="right"/>
            </div>

        </div>
    )
}
export default HomePageMain