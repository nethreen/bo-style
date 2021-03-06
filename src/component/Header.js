import React, { Component } from 'react';
import ImgLeft from "../img/bandana9.jpeg";
// import Logo from '../img/bandana.svg'
import  './HeaderStyle.scss';
import {Link} from 'react-router-dom';
import Menu from './Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        }
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle(e) {
        e.stopPropagation();
        this.setState({
        isOpen: !this.state.isOpen
        });
        console.log("menuu")
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div className="header">
                <div className="left-section">
                    <img src={ImgLeft} className="left-img" alt="left img"/>
                </div>
                <div className="menubutton" onClick={ this.menuToggle }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="right-section">
                    {/* <img src={Logo} className="logo" alt="logo"/> */}
                    <h3>
                        Welcome To BoStyle
                    </h3>
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="m437.737 210.914c17.88-42.724 30.701-87.527 38.134-133.311.963-5.992-3.628-11.556-9.801-11.599-.024 0-.047-.004-.07-.004h-165c-5.522 0-10 4.478-10 10s4.478 10 10 9.99h150.826c-35.385 94.186-105.948 173.19-195.75 218.793-77.031-39.798-138.484-101.631-177.45-177.656 67.069 61.124 154.531 87.312 238.381 78.822 5.495-.557 9.498-5.462 8.942-10.956-.557-5.495-5.457-9.487-10.956-8.942-93.829 9.493-187.553-28.619-248.34-100.051h144.347c5.523 0 10-4.478 10-10s-4.477-10-10-10h-165c-6.206 0-10.847 5.601-9.871 11.603 7.433 45.783 20.254 90.586 38.133 133.311-46.018 29.259-74.262 80.209-74.262 135.086v30c0 5.522 4.477 10 10 10 50.162 0 96.527-23.044 126.733-62.309 31.844 45.109 69.797 85.475 113.013 120.112 1.827 1.465 4.041 2.197 6.254 2.197s4.427-.732 6.254-2.197c43.217-34.638 81.171-75.006 113.013-120.111 30.206 39.264 76.571 62.308 126.733 62.308 5.522 0 10-4.478 10-10v-30c0-54.877-28.244-105.827-74.263-135.086zm-417.737 154.735v-19.649c0-46.984 23.664-90.68 62.41-116.529 12.208 26.572 26.42 52.3 42.378 76.683-24.333 34.853-62.589 56.528-104.788 59.495zm236 57.463c-80.137-66.099-141.508-153.478-176.144-253.635 41.542 65.654 100.402 119.702 171.659 155.461 1.177.591 2.882 1.064 4.478 1.064h.008s.005 0 .008 0c1.477 0 3.18-.425 4.406-1.029 71.808-35.324 130.101-89.017 170.948-153.229-34.611 98.735-95.511 185.503-175.363 251.368zm236-57.463c-42.199-2.968-80.456-24.643-104.787-59.495 15.96-24.388 30.172-50.115 42.377-76.683 38.745 25.848 62.41 69.545 62.41 116.529z" />
                            <circle cx="256" cy="76" r="10" />
                        </g>
                    </svg>
                    <p>
                            It has roots in a piece of classical <br/> Latin literature from 45 BC,making it <br/> over 2000 years old.
                    </p>

                    <Link to="" className="see-more">
                        See Product
                    </Link>
                </div>
                <Menu menuStatus={ menuStatus }/>
            </div>
        )
    }
}

export default Header




