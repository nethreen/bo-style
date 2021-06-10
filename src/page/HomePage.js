import React, { Component } from 'react';
import Header from '../component/Header';
import HomePageMain from '../component/HomePageMain';
import ProductCard from '../component/ProductCard';
class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePageMain/>
                <ProductCard/>
            </div>
        )
    }
}
export default HomePage