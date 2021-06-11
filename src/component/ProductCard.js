import React from 'react'
import  './ProductCardStyle.scss'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { addToCart } from "../redux/actions/card.action";
import { bindActionCreators } from "redux";

const ProductCard = ({product,addToCart}) => {
    return (
        <div className="productcard">
            <img src={product.imgUrl}  alt="new collection img"/>
            <h6>
                {product.name}
            </h6>
            <p>
                {product.overview}
            </p>
            <span>
                {product.price}
            </span>
                <div className="more-button">
                <button
                    className="add-button" onClick={() => addToCart(product.id)}>
                    Buy
                </button>
                    <Link to="">
                        See
                    </Link>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addToCart: (id) => addToCart(id),
      },
      dispatch
    );
  };
export default connect(null, mapDispatchToProps) (ProductCard);