import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";
import classes from "./MenuItem.module.css";

function MenuItem(props) {
  const items = useSelector((state) => state.cart.items);
  let totalQuantity = 0;
  const currenItem = items.find((item) => item.id === props.name);
  if (currenItem) {
    totalQuantity = Number(currenItem.qty);
  }
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.name,
        price: props.price,
        name: props.name,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemToCart(props.name));
  };
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.content}>
          <div className={classes.imgBx}>
            <img src={props.image} />
          </div>
          <div className={classes.contentBx}>
            <h3>{props.name}</h3>
            <br />
            <span>{props.price}$</span>
          </div>
        </div>

        <div className={classes.sci}>
          <div className={classes.actions}>
            {/* {<button onClick={addToCartHandler}>Add to Cart</button>} */}
            <button
              className={classes.addPad}
              onClick={removeFromCartHandler}
              disabled={!Boolean(totalQuantity)}
            >
              -
            </button>
            <p className={classes.addPad}>{totalQuantity}</p>
            <button className={classes.addPad} onClick={addToCartHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
