import { useState, useEffect, createContext, useContext } from "react";
import React from "react";
export default function Form(props) {
  const [input, setinput] = useState({
    name: "",
    place: "",
    order: "",
    amount: "",
    totalamount: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setinput((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  function handlesubmit() {
    props.ADD(input);
    setinput({
      name: "",
      place: "",
      order: "",
      amount: "",
      totalamount: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form class="FORM">
        <input
          onChange={handleChange}
          name="name"
          placeholder="Name..."
          value={input.name}
          type="text"
          inputmode="email"
        />
        <input
          onChange={handleChange}
          name="place"
          placeholder="Place..."
          value={input.place}
          type="text"
          inputmode="email"
        />
        <textarea
          onChange={handleChange}
          name="order"
          placeholder="Order details..."
          value={input.order}
          type="text"
          inputmode="email"
        />
        <input
          onChange={handleChange}
          name="amount"
          placeholder="Amount..."
          value={input.amount}
          type="text"
          inputmode="numeric"
        />
        <input
          onChange={handleChange}
          name="totalamount"
          placeholder="Total Amount..."
          value={input.totalamount}
          type="text"
          inputmode="numeric"
        />
        <button onClick={handlesubmit}>Add</button>
      </form>
    </div>
  );
}
