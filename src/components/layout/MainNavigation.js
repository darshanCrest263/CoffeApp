import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { authActions } from "../store/authslice";
import { orderActions } from "../store/orderSlice";

function MainNavigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const logOutHandler = () => {
    dispatch(authActions.logout());
    dispatch(orderActions.clearData());
    localStorage.removeItem("uid");
    localStorage.removeItem("idToken");
  };
  return (
    <header className={classes.header}>
      <Link to="/menu">
        <div className={classes.logo}>D' cafe</div>
      </Link>
      <ul>
        {isLoggedIn && (
          <React.Fragment>
            <li>
              <Link to="Menu">Menu</Link>
            </li>
            <li>
              <Link to="/cart">{`Cart ( ${totalQuantity} )`}</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/auth" onClick={logOutHandler}>
                Logout
              </Link>
            </li>
          </React.Fragment>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default MainNavigation;
