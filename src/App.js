import "./App.css";
import { useEffect } from "react";
import AuthenticationForm from "./components/Authentication/AuthenticationForm";
import Layout from "./components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Orders from "./components/orders/Orders";
import Cart from "./components/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { authActions } from "./components/store/authslice";
import { orderActions } from "./components/store/orderSlice";

function App() {
  const orders = useSelector((state) => state.order.orderedItems);
  const dispatch = useDispatch();
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const url = `https://coffee-app-b5cc7-default-rtdb.firebaseio.com/orders/${uid}.json/`;
    if (localStorage.getItem("uid")) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => dispatch(orderActions.replaceData(data)))
        .catch((error) => console.log(error));
    }
  }, [uid]);

  useEffect(() => {
    const id = localStorage.getItem("idToken");
    if (id) {
      dispatch(authActions.login(localStorage.getItem("idToken")));
    }
  }, []);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        {!isLoggedIn && (
          <Route
            path="/auth"
            element={<AuthenticationForm></AuthenticationForm>}
          ></Route>
        )}
        {isLoggedIn && (
          <React.Fragment>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/orders" element={<Orders></Orders>}></Route>
            <Route path="*" element={<Navigate to="/menu"></Navigate>}></Route>
          </React.Fragment>
        )}

        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/auth"></Navigate>}></Route>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
