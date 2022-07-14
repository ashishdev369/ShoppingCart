import { product } from "prelude-ls";
import React from "react";
import { useSelector } from "react-redux";


const handleButton = () => {

}

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.title}
            height="200px"
            width="180px"
          ></img>
        </div>

        <div className="col-md-4">
          <h3>{product.title}</h3>
          <p className="lead fw-bold">
            {product.qty} X ${product.price} = {product.qty * product.price}
          </p>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => handleButton(product)}
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => handleButton(product)}
          >
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
