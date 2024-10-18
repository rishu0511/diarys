import React from "react";
import Order from "./orders.jsx";

export default function Allorder(props) {
  return (
    <div>
      {props.ORDER.map((orderitem, index) => {
        return (
          <Order
            key={index}
            id={index}
            Name={orderitem.name}
            Place={orderitem.place}
            Order={orderitem.order}
            Amount={orderitem.amount}
            Totalamount={orderitem.totalamount}
            showi={props.SHOWID}
            delids={props.DELETEID}
          />
        );
      })}
    </div>
  );
}
