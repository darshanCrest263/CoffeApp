import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cartslice";
import { orderActions } from "../store/orderSlice";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
function Cart(props) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cancleButtonHandler = () => {
    dispatch(cartActions.cancelAllOrderItems());
  };

  const orderButtonHandler = () => {
    dispatch(
      orderActions.addOrdersFromCart({
        items: items,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount,
      })
    );
    cancleButtonHandler();
    navigation("/orders");
  };

  return (
    <div className={classes.container}>
      <h5>Your Orders</h5>
      <hr />
      {Boolean(items.length) ? (
        <React.Fragment>
          <div className={classes.tableContainer}>
            <table>
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>

                {items.map((item) => {
                  return <CartItem key={item.id} item={item}></CartItem>;
                })}
              </tbody>
            </table>
          </div>
          <hr />
          <h5>{`Total = ${totalAmount}$`}</h5>
          <div className={classes.actions}>
            <button onClick={orderButtonHandler}>Order it</button>
            <button onClick={cancleButtonHandler}>Cancel</button>
          </div>
        </React.Fragment>
      ) : (
        <p>Add our delicious coffee to your cart...</p>
      )}
    </div>
  );
}

export default Cart;
