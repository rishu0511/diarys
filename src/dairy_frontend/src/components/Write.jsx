import React, { useState, createContext, useContext } from "react";
import Form from "./form.jsx";
import Forme from "./forme.jsx";
import Orders from "./orders.jsx";
import Allorder from "./createorder.jsx";
import Calculater from "./calculater.jsx";

export function App() {
  const [ishidden, sethidden] = useState(false);
  const [ishiddenshow, setshow] = useState(false);
  const [order, setorder] = useState([]);
  const [object, setobject] = useState([]);
  const [isedit, setedit] = useState(false);
  const [ids, setid] = useState(0);
  const [obj, setobj] = useState({});
  const [Input, setInput] = useState({
    name: "",
    place: "",
    order: "",
    amount: "",
    totalamount: "",
  });

  function addorder(orders) {
    sethidden(false);
    setshow(true);
    setorder((prevalue) => {
      return [...prevalue, orders];
    });
  }
  function deleteorder(id) {
    setorder((prevalue) => {
      return prevalue.filter((item, index) => {
        return index != id;
      });
    });
  }
  function deleteid(id) {
    const Object = order.filter((item, index) => {
      return index === id;
    });
    setid(id);
    setobject(Object);
    setedit(true);
    sethidden(false);
    setshow(false);
    const obje = Object[0];
    const Name = obje.name;
    const Place = obje.place;
    const Amount = obje.amount;
    const Order = obje.order;
    const Totalamount = obje.totalamount;
    setobj(obje);
    Input.name = Name;
    Input.place = Place;
    Input.amount = Amount;
    Input.totalamount = Totalamount;
    Input.order = Order;
    console.log(Name);
    console.log(Input);
  }
  function Expand() {
    if (ishidden === false) {
      sethidden(true);
    } else if (ishidden === true) {
      sethidden(false);
    }
  }
  function Expandorder() {
    if (ishiddenshow === false) {
      setshow(true);
    } else if (ishiddenshow === true) {
      setshow(false);
    }
  }
  function showid() {
    setedit(false);
  }
  return (
    <div className="App">
      <h1>Rajendra works Shop</h1>
      <h2 id="title">All orders</h2>
      <div>
        <button onClick={Expand} class="expand">
          New orders{" "}
        </button>
        <button onClick={Expandorder} class="expand-show">
          Show orders
        </button>
      </div>
      {isedit ? (
        <Forme
          ADD={addorder}
          SHOWID={showid}
          INPUT={Input}
          DELETEO={deleteorder}
          ID={ids}
        />
      ) : null}
      {ishidden ? <Form ADD={addorder} INPUT={Input} /> : null}
      {ishiddenshow ? (
        <Allorder SHOWID={deleteid} ORDER={order} DELETEID={deleteorder} />
      ) : null}
      <Calculater />
    </div>
  );
}
