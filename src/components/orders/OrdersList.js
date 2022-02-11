import React from "react";
import classes from "./OrdersList.module.css";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function OrdersList(props) {
  const date = new Date(props.date);
  return (
    <div className={classes.listContainer}>
      <h6>{`${date.getDate()} ${
        monthNames[date.getMonth()]
      } , ${date.getFullYear()}`}</h6>
      <ul>
        {props.items?.map((item) => {
          return (
            <li key={item.name}>
              {item.name} ===> {item.price} x {item.qty} = {item.totalPrice}
            </li>
          );
        })}
      </ul>
      <hr />
      <p>total:{props.totalAmount}$</p>
    </div>
  );
}

export default OrdersList;
