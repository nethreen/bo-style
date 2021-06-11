import * as actionTypes from "../actions/cart-types";

const INITIAL_STATE = {
  products: [
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://i.pinimg.com/564x/b0/14/de/b014deeb8c21294fae6dcde1b050660d.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "new",
      rating: "4.8",
      id: 1,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://cdn.nohat.cc/thumb/f/720/a50288f6127f4cae818f.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "exclusive",
      rating: "4.8",
      id: 2,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://images.unsplash.com/photo-1596717582356-6387acfc114a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "new",
      rating: "4.8",
      id: 3,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://i.pinimg.com/564x/64/98/d9/6498d9df031efe03232f5b60838ea308.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "old",
      rating: "4.8",
      id: 4,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://cdn.shopify.com/s/files/1/0780/7873/products/Yellow-Bandana-Headband_15df830b-75ee-458a-8120-d3d33620be0e_2400x.jpg?v=1568732876",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "exclusive",
      rating: "4.8",
      id: 5,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://my-test-11.slatic.net/p/8740a0d4554d60c5ff299413b27eab94.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "new",
      rating: "4.8",
      id: 6,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://i.pinimg.com/564x/92/71/f3/9271f3d0ad470127dbdf02d024984fd6.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "old",
      rating: "4.8",
      id: 7,
    },
    {
      name: "Lorem Ipsum is simply",
      imgUrl: "https://i.pinimg.com/564x/1c/70/e0/1c70e0d9e2195f36b864519f986406cb.jpg",
      overview: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price: "14.99",
      status: "old",
      rating: "4.8",
      id: 8,
    },
  ],
  cart: [],
  currentItem: null,
}


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case "SET_CURRENT_CART":
    //   return {
    //     ...state,
    //     cart: action.payload
    //   };
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUSTY_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: + action.payload.qty }
              : item
          ),
        };
        case actionTypes.LOAD_CURRENT_ITEM:
          return {
            ...state,
            currentItem: action.payload,
          };
    
      default:
        return state;
  }
}

export default cartReducer;