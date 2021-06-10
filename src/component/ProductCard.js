import React, { Component } from 'react'
import  './ProductCardStyle.scss'
import {Link} from 'react-router-dom';

class ProductCard extends Component {
    render() {
        return (
            <div className="productcard">
                   <img src=""  alt="new collection img"/>
                    <h6>
                        Latin professor at
                    </h6>
                    <p>
                        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero
                    </p>
                    <div className="more-button">
                        <Link to="">
                            Get Product
                        </Link>
                    </div>
            </div>
        )
    }
}
export default ProductCard;