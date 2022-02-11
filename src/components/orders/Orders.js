import { useSelector } from "react-redux";
import classes from "./Orders.module.css";
import OrdersList from "./OrdersList";
import { useEffect } from "react";

function Orders(props) {
  const orders = useSelector((state) => state.order.orderedItems)
    .slice()
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const url = `https://coffee-app-b5cc7-default-rtdb.firebaseio.com/orders/${uid}.json/`;
    if (orders.length !== 0) {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(orders),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [orders]);

  return (
    <div className={classes.container}>
      <h5>Your Orders</h5>
      <hr />
      {orders.length ? (
        orders?.map((item) => {
          return (
            <OrdersList
              key={item.id}
              id={item.id}
              date={item.date}
              totalAmount={item.totalAmount}
              items={item.items}
            />
          );
        })
      ) : (
        <p>Order Something...</p>
      )}
    </div>
  );
}

export default Orders;
