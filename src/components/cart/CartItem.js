import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartslice";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemToCart(props.item.id));
  };

  const closeButtonHandler = () => {
    dispatch(cartActions.cancelOneItem(props.item.id));
  };
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>
        {props.item.price.toFixed(2)}$ x {props.item.qty}
        <button onClick={removeFromCartHandler}>-</button>
        <button onClick={addToCartHandler}>+</button>
      </td>
      <td>
        {props.item.totalPrice}$
        <button className={classes.closeButton} onClick={closeButtonHandler}>
          x
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
