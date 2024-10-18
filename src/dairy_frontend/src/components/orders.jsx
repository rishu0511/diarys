import React from "react";
import Form from "./form.jsx";
import { useState } from "react";
function Orders(props) {
  const [editfrom, setedit] = useState(false);

  function handleSubmit() {
    props.delids(props.id);
  }
  function seteditform() {
    props.showi(props.id);
  }
  function Conform_delete() {
    if (confirm("Are you sure you want to delete!")) {
      handleSubmit();
    } else {
      null;
    }
  }

  return (
    <div class="active">
      <p>Name: {props.Name}</p>
      <p>Place: {props.Place}</p>
      <p>Order :{props.Order}</p>
      <p>Amount: {props.Amount}</p>
      <p>Total amount: {props.Totalamount}</p>
      <div>
        <button class="note-btn" onClick={Conform_delete}>
          Delete
        </button>
        <button class="note-btn-add" onClick={seteditform}>
          edit
        </button>
      </div>
    </div>
  );
}

export default Orders;
