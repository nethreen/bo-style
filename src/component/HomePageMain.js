import React, {Component} from 'react';
import MainImg from '../img/bandana11.jpeg';

import './HomePageMainStyle.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import ProductCard from './ProductCard';
import {connect} from 'react-redux';

class HomePageMain extends Component{
    render(){
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
                                {this.props.products.filter((product) => product.status == "new").map((product, i) => (
                                    <SwiperSlide key={i} >
                                        <ProductCard product={product} key={product.id} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    
                    <img src={MainImg} className="main-leftimg" alt="right"/>
                    <h4 className="main-lefttext">
                        New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.
                    </h4>
                </div>
                <div className="homepage-products">
                    <div className="container">
                        <div className="homepage-product-header">
                            <div></div>
                            <h4>
                                Your Style
                            </h4>
                        </div>
                        <div className="row">
                            {this.props.products.filter((product) => product.status == "old").map((product, i) => (
                                <div className="xl-4 lg-4 md-4 sm-6" key={i} >
                                    <ProductCard product={product} key={product.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="homepage-bio">
                    <div className="container">
                        <div className="row">
                            <div className="xl-4 lg-4 md-4 sm-12">
                                <img src="https://i.pinimg.com/564x/f2/6b/c3/f26bc3832d5fca15c3729a579574e719.jpg" className="bio-img" alt="bio img"/>
                            </div>
                            <div className="xl-8 lhg-8 md-8 sm-12">
                                <div className="bio-text-parent">
                                    <div className="bio-text">
                                        " The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from e "                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-galery">
                    <img src="https://img.ohmymag.com/article/480/foulard/le-foulard-noue-autour-de-la-tete-haistylehub_c697d5068dccf0d78f612e5dc25b1a53b1d50bd9.jpg" className="homepage-galery-img" alt="galery"/>
                    <img src="https://pbs.twimg.com/media/EK3MOCPXkAECtOS?format=jpg&name=small" className="homepage-galery-img" alt="galery"/>
                    <img src="https://64.media.tumblr.com/e7a5eafecbaca610384b594a357cc240/443d4ae8baa06ecf-89/s500x750/4c866b66057c62a410fb737c1f77c103c876aa44.jpg" className="homepage-galery-img" alt="galery"/>
                </div>
                <div className="">
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.cart.products
    }
  }
export default connect(mapStateToProps) (HomePageMain);